class TempMailPage {
    
get tempEmail() {return $('#geny')};
get table() {return $('#egen')};
get checkEmailBtn() {return $$('button[class="md but text f24 egenbut"]')[2]};
get refresh() {return $('#refresh')};
get estimMonthCost() {return $('#mail tr:nth-child(2) td h2')};

async BlockAds () {
    await browser.fullscreenWindow();
    await browser.execute(() => {
        const ads = document.querySelectorAll('.ad'); 
            ads.forEach(ad => {
            ad.style.display = 'none';
        });
    });
}

async pressBtn() {
    await browser.fullscreenWindow();
    await this.table.scrollIntoView();
    await browser.waitUntil(() => this.checkEmailBtn.isClickable());
    await this.checkEmailBtn.click(); 
}

//
async checkCost() {
    await browser.switchToFrame(await $('#ifmail'));
    await this.estimMonthCost.scrollIntoView(); 
    return this.estimMonthCost.getText(); 
}

}
module.exports = TempMailPage;