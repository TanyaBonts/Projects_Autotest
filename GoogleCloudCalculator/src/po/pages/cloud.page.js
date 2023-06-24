const BasePage = require('./base.page');

class CloudPage extends BasePage {
    constructor() {
        super("/")
    }
    
get search() {return $(".devsite-search-container")};
get placeholder () {return $("input[placeholder='Search']")};
}
module.exports = CloudPage;