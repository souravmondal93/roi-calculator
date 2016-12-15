(function() {
    'use strict';

    angular
        .module('roi')
        .factory('RoiCalculator', function() {
            var factors = {
                activeUserFactor: 0.7,
                conversionFactor: 0.2,
                discountFactor: 0.2,
                campaignsPerMonth: 1
            };

            function calculate(customers, transaction, stores) {
                return (customers * transaction * stores * factors.activeUserFactor *
                    factors.conversionFactor * (1 - factors.discountFactor) * factors.campaignsPerMonth);
            }

            return {
                calculate: calculate
            }
        })

})();