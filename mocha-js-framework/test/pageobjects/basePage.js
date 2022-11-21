var config = require('../../config.json');

module.exports = new class BasePage{
   
    async navigateToUrl(){
        await browser.url(config.baseUrl);
        browser.maximizeWindow();
    }

    async navigateToUrl2(){
        await browser.url(config.alertUrl);
    }

    async navigateToUrl3(){
        await browser.url(config.selectmenuUrl);
    }
}