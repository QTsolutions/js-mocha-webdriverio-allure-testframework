const homePage = require('../pageobjects/homePage');
const basePage = require('../pageobjects/basePage');
const moment = require('moment');
const testData = require('../../testData.json');

describe('demoQA form',()=>{

    it('navigate to demoqa',async()=>{
        await basePage.navigateToUrl();
        await expect(browser).toHaveTitle('ToolsQA')
    })

    it('enter firstname',async()=>{
        await homePage.enterDetails(testData.firstName, testData.lastName, testData.email);
        await browser.pause(2000);
        let elem = await $('#userName-label');
        await expect(elem).toBeDisplayed();
    })

    it('select gender',async()=>{
        await homePage.clickOnRadioBtn();
        await browser.pause(2000);
        let elem = await $('#userEmail-label');
        await expect(elem).toBeDisplayed();
        
    })  

    it('enter mobileNo',async()=>{
        await homePage.enterMobileNo(testData.mobileNo);
        await browser.pause(2000);
        let elem = await $("(//div[@class='col-md-3 col-sm-12'])[4]");
        await expect(elem).toBeDisplayed();
    })  

    it('display date',async()=>{
       await moment().format('DD MMM YYYY');
        await browser.pause(2000);
        let elem = await $("#dateOfBirth-label");
        await expect(elem).toHaveText("Date of Birth");
    })  

    it('select hobbies',async()=>{
        await homePage.clickOnHobbies().scrollIntoView;
        await browser.pause(2000);
        let elem = await $("(//label[@class='form-label'])[6]");
        await expect(elem).toHaveText("Hobbies");
    })  

})

describe('demoQA aler',()=>{

    it('navigate to demoqa alert',async()=>{
        await basePage.navigateToUrl2();
        await browser.pause(2000);
        await expect(browser).toHaveUrlContaining("alerts")
    })

    it('click on first alert',async()=>{
        await homePage.clickOnAlertBtn();
        browser.acceptAlert();
        await browser.pause(2000);
        let elem = await $("//div[@class='main-header']");
        await expect(elem).toHaveText("Alerts")
    })
})

describe('demoQA select-menu',()=>{
    it('navigate to demoqa select-menu',async()=>{
        await basePage.navigateToUrl3();
        await browser.pause(2000);
        await expect(browser).toHaveUrl("https://demoqa.com/select-menu");
    })

    it('click on the value dropdown',async()=>{
        await homePage.clickOnValue();
        await homePage.clickOnDropdown();
        await browser.pause(2000);
        let elem = await $("//div[@class='main-header']");
        await expect(elem).toHaveText("Select Menu")
    })

    it('click on the one dropdown',async()=>{
        await homePage.clickOnTitle();
        await homePage.clickOnTitleDropDown();
        await browser.pause(2000);
        let elem = await $("(//div[@class='col-md-6 col-sm-12'])[1]");
        await expect(elem).toExist();
    })

    it('select the color from menu',async()=>{
        await homePage.selectMenuDropdown().scrollIntoView;
        await browser.pause(2000);
        let elem = await $("(//div[@class='col-md-6 col-sm-12'])[5]");
        await expect(elem).toHaveText("Old Style Select Menu")
     })

})

