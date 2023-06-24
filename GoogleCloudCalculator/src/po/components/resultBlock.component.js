class ResultBlockComponent  {

    get resultBlock () {return $('#resultBlock')};
    get region() {return $$('div[class="md-list-item-text ng-binding"]')[0]};
    get commitmentTerm () {return $$('div[class="md-list-item-text ng-binding"]')[2]};
    get provisioningModel () {return $$('div[class="md-list-item-text ng-binding"]')[3]};
    get instanceType () {return $$('div[class="md-list-item-text ng-binding cpc-cart-multiline flex"]')[0]};
    get localSSD () {return $$('div[class="md-list-item-text ng-binding cpc-cart-multiline flex"]')[1]};
    get totalEstimatedCost () {return $('b[class="ng-binding"]')};
    get emailBtn () {return $('button[id="Email Estimate"]')};
}
module.exports = ResultBlockComponent;