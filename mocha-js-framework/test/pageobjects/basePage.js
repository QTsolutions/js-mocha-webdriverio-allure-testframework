module.exports = new class BasePage{

    async navigateToUrl(){
        await browser.url('https://demoqa.com/automation-practice-form');
        browser.maximizeWindow();
    }

    async navigateToUrl2(){
        await browser.url('https://demoqa.com/alerts');
    }

    async navigateToUrl3(){
        await browser.url('https://demoqa.com/select-menu');
    }
}