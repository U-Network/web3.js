
var formatters = require('../formatters');
var Method = require('../method');

var Freegas = function (web3) {
    this._requestManager = web3._requestManager;

    var self = this;
    
    methods().forEach(function(method) { 
        method.attachToObject(self);
        method.setRequestManager(web3._requestManager);
    });
};

var methods = function () {
    var getUsed = new Method({
        name: 'getUsed',
        call: 'freegas_getUsed',
        params: 1,
        inputFormatter: [formatters.inputAddressFormatter],
        outputFormatter: formatters.outputBigNumberFormatter
    });
    var getSurplus = new Method({
        name: 'getSurplus',
        call: 'freegas_getSurplus',
        params: 1,
        inputFormatter: [formatters.inputAddressFormatter],
        outputFormatter: formatters.outputBigNumberFormatter
    });

    return [
      getUsed, getSurplus
    ];
};

module.exports = Freegas;
