const {pages} = require('../po');


describe ("Google Cloud Pricing Calculator Test", async()=>{
    
it ("Send Email Smoke", async()=>{
    await pages("cloud").open();
    await pages("cloud").search.click(); 
    await pages("cloud").placeholder.setValue("Google Cloud Platform Pricing Calculator");
    await browser.keys('Enter');
    await expect(browser).toHaveTitleContaining("Google Cloud Platform Pricing Calculator");
    await pages("search").calculator.click();
    await expect(browser).toHaveTitle("Google Cloud Pricing Calculator");
    await pages("form").prepare();
    await pages("form").form.engine.click();
    await pages("form").form.instanceNumber("4"); 
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
    await pages("form").estimateResult.emailBtn.click();
    await expect(pages("form").emailForm.emailYourEstimate).toBeDisplayed();
    await browser.newWindow("https://yopmail.com/ru/email-generator");
    await expect(browser).toHaveTitleContaining('Генератор Случайных Электронных Адресов');
    await pages("mail").BlockAds();
    const tmpEmail = await pages("mail").tempEmail.getText();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[0]);
    await pages("form").emailForm.fillInEmail(); 
    await pages("form").emailForm.email.setValue(tmpEmail);
    await pages("form").emailForm.email.scrollIntoView();
    await pages("form").emailForm.sendEmailBtn.click();
    await browser.switchToWindow(handles[1]);
    await pages("mail").pressBtn();
    await expect(browser).toHaveTitle('Входящие');
    await browser.pause (10000);
    await pages("mail").refresh.click();
    const costPromise = pages("mail").checkCost();
    const cost = await costPromise;
    console.log(cost);
    const regex = /USD (\d+,\d+\.\d+)/;
    const extractedCost = cost.match(regex)[1];
    console.log(extractedCost);
    await expect(extractedCost).toBe("1,081.20"); //1,081.20
})
})



  