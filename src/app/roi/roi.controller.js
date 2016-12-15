(function() {
    'use strict';

    angular
        .module('roi')
        .controller('RoiController', RoiController);

    /** @ngInject */
    function RoiController($log, $scope) {
        var vm = this;

        vm.factors = {
            activeUserFactor: 0.7,
            conversionFactor: 0.2,
            discountFactor: 0.2,
            campaignsPerMonth: 1
        };

        vm.customers = 0;
        vm.transactionValue = 0;
        vm.visitorsPerMonth = 0;
        vm.stores = 0;
        vm.roi = 0;

        vm.calculateROI = calculateROI;
        vm.clearInputs = clearInputs;

        function calculateROI() {
            return (vm.customers * vm.transactionValue * vm.stores * vm.factors.activeUserFactor *
                vm.factors.conversionFactor * (1 - vm.factors.discountFactor) * vm.factors.campaignsPerMonth);
        }

        function clearInputs() {
            vm.customers = 0;
            vm.transactionValue = 0;
            vm.visitorsPerMonth = 0;
            vm.stores = 0;
        }

        $log.info('ROI Controller');

        $scope.$watchGroup([
            function () {
                return vm.customers;
            }, function () {
                return vm.transactionValue;
            }, function () {
                return vm.visitorsPerMonth;
            }, function () {
                return vm.stores;
            }],
            function changeDetector(newVal, oldVal) {
                $log.info(newVal, oldVal);

                vm.roi = vm.calculateROI();
            }
        )
    }
})();
