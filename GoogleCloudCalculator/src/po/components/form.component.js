class FormComponent  {
    
    get engine() {return $('#tab-item-1')};
    get instances() {return $('input[ng-model="listingCtrl.computeServer.quantity"]')};
    get system () {return $('md-select[ng-model="listingCtrl.computeServer.os"]')};
    get free () {return $('md-option[value="free"]')};
    get vmClass () {return $('md-select[ng-model="listingCtrl.computeServer.class"]')};
    get regular () {return $('md-option[value="regular"]')};
    get series () {return $('md-select[ng-model="listingCtrl.computeServer.series"]')};
    get n1 () {return $$('md-option[ng-repeat="item in listingCtrl.computeServerGenerationOptions[listingCtrl.computeServer.family]"]')[0]};
    get instanceType () {return $('md-select[ng-model="listingCtrl.computeServer.instance"]')};
    get n1Standard8 () {return $$('md-option[ng-repeat="instance in typeInfo"]')[3]};
    get bootDiskSize () {return $('input[ng-model="listingCtrl.computeServer.bootDiskSize"]')};
    get addGPU () {return $('md-checkbox[aria-label="Add GPUs"]')};
    get gpuType () {return $('md-select[ng-model="listingCtrl.computeServer.gpuType"]')};
    get nvidiaV100 () {return $('md-option[value="NVIDIA_TESLA_V100"]')}; //'md-option[value="NVIDIA_TESLA_P100"]'
    get gpuNumber () {return $('md-select[ng-model="listingCtrl.computeServer.gpuCount"]')};
    get gpuValue1 () {return $$('md-option[ng-disabled="item.value != 0 && item.value < listingCtrl.minGPU"]')[1]};
    get localSSD () {return $('md-select[ng-model="listingCtrl.computeServer.ssd"]')};
    get gb2x375 () {return $$('md-option[ng-repeat="item in listingCtrl.dynamicSsd.computeServer"]')[2]};
    get location () {return $('md-select[ng-model="listingCtrl.computeServer.location"]')};
    get frankfurt () {return $('md-option[value="europe-west3"]')};
    get committedUsage () {return $('md-select[ng-model="listingCtrl.computeServer.cud"]')};
    get usage1Year () {return $$('md-option[ng-value="1"]')[1]};
    get addToEstimateBtn () {return $('button[class="md-raised md-primary cpc-button md-button md-ink-ripple"]')};

    async instanceNumber (number) {
        await this.instances.setValue(number); 
    }

    async chooseElement(element) {
        await browser.waitUntil(() => element.isClickable());
        element.click(); 
    }

    async chooseSystem() {
        await this.system.click(); 
        await this.free.click(); 
    }

    async chooseVMclass() {
    await this.free.scrollIntoView();
    await this.vmClass.click(); 
    await this.regular.click(); 
    }

    async chooseSeries() {
    await this.series.click(); 
    await this.chooseElement(this.n1);
    }

    async chooseInstanceType() {
    await this.instanceType.click(); 
    await this.chooseElement(this.n1Standard8);
    }

    async chooseGPUtype() {
        await this.gpuType.click(); 
        await this.chooseElement(this.nvidiaV100);
    }

    async chooseGPUvalue() {
        await this.gpuNumber.click(); 
        await this.chooseElement(this.gpuValue1);
    }

    async chooseSSD() {
        await this.localSSD.click(); 
        await this.chooseElement(this.gb2x375);
    }
    async chooseLocation() {
        await this.location.click(); 
        await this.chooseElement(this.frankfurt);
    }
    async chooseCommittedUsage() {
        await this.committedUsage.scrollIntoView();
        await this.committedUsage.click(); 
        await this.chooseElement(this.usage1Year); 
    }
}
module.exports = FormComponent;