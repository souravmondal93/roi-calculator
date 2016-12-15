(function () {
    'use strict';

    describe('ROI Controller', function () {
        var vm;

        beforeEach(module('roi'));
        beforeEach(inject(function (_$controller_) {
            vm = _$controller_('RoiController');
        }));

        describe('Present', function () {
            it('dummy data test', function() {
                vm.factors = {
                    activeUserFactor: 0.7,
                    conversionFactor: 0.2,
                    discountFactor: 0.2,
                    campaignsPerMonth: 1
                };

                vm.customers = 8000;
                vm.transactionValue = 6;
                vm.visitorsPerMonth = 3;
                vm.stores = 20;

                vm.roi = vm.calculateROI();
                expect(vm.roi).toEqual(jasmine.any(Number));
            });
        });
    });
})();
