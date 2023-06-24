const BasePage = require('./base.page');
const { FormComponent, ResultBlockComponent, SendEmailFormComponent } = require("../components");

class FormPage extends BasePage {

    constructor() {
        super("/products/calculator");
        this.form = new FormComponent();
        this.estimateResult = new ResultBlockComponent();
        this.emailForm = new SendEmailFormComponent();
    }

    async prepare() {
        await browser.fullscreenWindow();
        await browser.switchToFrame(await $('devsite-iframe iframe'));
        await browser.switchToFrame(await $('#myFrame'));
    }
}
module.exports = FormPage;