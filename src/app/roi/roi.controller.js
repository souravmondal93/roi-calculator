(function() {
    'use strict';

    angular
        .module('roi')
        .controller('RoiController', RoiController);

    /** @ngInject */
    function RoiController($log, $scope, $stateParams, RoiCalculator) {
        var vm = this;

        vm.customers = 0;
        vm.transactionValue = 0;
        vm.visitorsPerMonth = 0;
        vm.stores = 0;
        vm.roi = 0;

        vm.clearInputs = clearInputs;

        if($stateParams.customers)
            vm.customers = $stateParams.customers;
        function clearInputs() {
            vm.customers = 0;
            vm.transactionValue = 0;
            vm.visitorsPerMonth = 0;
            vm.stores = 0;
        }

        $log.info('ROI Controller', $stateParams);

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

                vm.roi = RoiCalculator.calculate(vm.customers, vm.transactionValue, vm.stores);
            }
        )
    }
})();
