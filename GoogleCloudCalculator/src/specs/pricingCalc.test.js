const {pages} = require('./../po');
const fs = require('fs');
let credentials = JSON.parse(fs.readFileSync('./testData/fillInForm.json'));

describe ("Google Cloud Pricing Calculator Test", async()=>{
it ("Search for Calculator Page", async()=>{
    await pages("cloud").open();
    await pages("cloud").search.click(); 
    await pages("cloud").placeholder.setValue("Google Cloud Platform Pricing Calculator");
    await browser.keys('Enter');
    await expect(browser).toHaveTitleContaining("Google Cloud Platform Pricing Calculator");
    await pages("search").calculator.click();
    await expect(browser).toHaveTitle("Google Cloud Pricing Calculator");
})

credentials.forEach( ({number}) =>{
it ("Fill In the Form", async()=>{ 
    await pages("form").open();
    await pages("form").prepare();
    await pages("form").form.engine.click();
    await pages("form").form.instanceNumber(number); 
    await pages("form").form.chooseSystem(); //free
    await pages("form").form.chooseVMclass(); //regular
    await pages("form").form.chooseSeries(); //N1
    await pages("form").form.chooseInstanceType(); //N1-Standard-8
    await pages("form").form.bootDiskSize.scrollIntoView(); 
    await pages("form").form.addGPU.click(); 
    await pages("form").form.chooseGPUtype(); //NVIDIA_TESLA_V100
    await pages("form").form.chooseGPUvalue(); //1
    await pages("form").form.chooseSSD(); //2x375 GB
    await pages("form").form.chooseLocation(); //Frankfurt
    await pages("form").form.chooseCommittedUsage(); //1 year
    await pages("form").form.addToEstimateBtn.click();
    await expect(pages("form").estimateResult.resultBlock).toBeDisplayed();
    await expect(pages("form").estimateResult.region).toHaveTextContaining("Frankfurt");
    await expect(pages("form").estimateResult.commitmentTerm).toHaveTextContaining("1 Year");
    await expect(pages("form").estimateResult.provisioningModel).toHaveTextContaining("Regular");
    await expect(pages("form").estimateResult.instanceType).toHaveTextContaining("n1-standard-8");
    await expect(pages("form").estimateResult.localSSD).toHaveTextContaining("2x375 GiB");
    await expect(pages("form").estimateResult.totalEstimatedCost).toHaveTextContaining("USD 1,081.20"); 
    // await browser.pause (3000);
})
})
})


  