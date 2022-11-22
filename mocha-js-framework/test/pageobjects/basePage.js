var config = require('../../config.json');

module.exports = new class BasePage{
   
    async navigateToFormUrl(){
        await browser.url(config.baseUrl);
        browser.maximizeWindow();
    }

    async navigateToAlertUrl(){
        await browser.url(config.alertUrl);
    }

    async navigateToSelectMenuUrl(){
        await browser.url(config.selectmenuUrl);
    }
}