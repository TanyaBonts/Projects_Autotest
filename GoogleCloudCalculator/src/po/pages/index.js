const CloudPage = require('./cloud.page');
const SearchResultsPage = require ('./searchResult.page');
const FormPage = require ('./form.page');
const TempMailPage = require('./tempMail.page');

/**
 * 
 * @param {'cloud'|'search'|'form'|'mail'} name 
 * @returns {CloudPage | SearchResultsPage | FormPage | TempMailPage}
 */

function pages(name) {
    const items = {
        cloud: new CloudPage(),
        search: new SearchResultsPage(),
        form: new FormPage(),
        mail: new TempMailPage(),
    }
    return items[name.toLowerCase()];
}
module.exports = {
    CloudPage,
    SearchResultsPage,
    FormPage,
    pages,
    TempMailPage,
}