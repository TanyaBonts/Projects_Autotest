class SendEmailFormComponent {
    get emailYourEstimate() {return $('form[name="emailForm"]')};
    get firstname() {return $('input[ng-model="emailQuote.user.firstname"]')};
    get title() {return $('input[ng-model="emailQuote.user.title"]')}; 
    get email() {return $('input[ng-model="emailQuote.user.email"]')};
    get sendEmailBtn() {return $('button[ng-click="emailQuote.emailQuote(true); emailQuote.$mdDialog.hide()"]')};


async fillInEmail() {
    await browser.switchToFrame(await $('devsite-iframe iframe'));
    await browser.switchToFrame(await $('#myFrame'));
    await this.email.click(); 
}
async pressSendBtn() {
    // await this.sendEmailBtn.scrollIntoView();
    await browser.waitUntil(() => this.sendEmailBtn.isClickable());
    await this.sendEmailBtn.click(); 
}
    
}
module.exports = SendEmailFormComponent;