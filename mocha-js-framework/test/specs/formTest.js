const testData = require('../../testData.json');
const homePage = require('../pageobjects/homePage');
const basePage = require('../pageobjects/basePage');
const moment = require('moment');

describe('demoQA form',()=>{

    it('navigate to demoqa',async()=>{
        await basePage.navigateToFormUrl();
        await expect(browser).toHaveTitle('ToolsQA')
    })

    it('enter firstname',async()=>{
        await homePage.enterDetails(testData.firstName, testData.lastName, testData.email);
        await browser.pause(2000);
        let elem = await homePage.test();
        await expect(elem).toBeDisplayed();
    })

    it('select gender',async()=>{
        await homePage.clickOnRadioBtn();
        await browser.pause(2000);
        let elem = await homePage.emailLabel();
        await expect(elem).toBeDisplayed();
        
    })  

    it('enter mobileNo',async()=>{
        await homePage.enterMobileNo(testData.mobileNo);
        await browser.pause(2000);
        let elem = await homePage.mobileNoLabel();
        await expect(elem).toBeDisplayed();
    })  

    it('display date',async()=>{
       await moment().format('DD MMM YYYY');
        await browser.pause(2000);
        let elem = await homePage.dobLabel();
        await expect(elem).toHaveText("Date of Birth");
    })  

    it('select hobbies',async()=>{
        await homePage.clickOnHobbies().scrollIntoView;
        await browser.pause(2000);
        let elem = await homePage.hobbieLabel();
        await expect(elem).toHaveText("Hobbies");
    })  

})

describe('demoQA alert',()=>{

    it('navigate to demoqa alert',async()=>{
        await basePage.navigateToAlertUrl();
        await browser.pause(2000);
        await expect(browser).toHaveUrlContaining("alerts")
    })

    it('click on first alert',async()=>{
        await homePage.clickOnAlertBtn();
        browser.acceptAlert();
        await browser.pause(2000);
        let elem = await homePage.headerLabel();
        await expect(elem).toHaveText("Alerts")
    })
})

describe('demoQA select-menu',()=>{
    it('navigate to demoqa select-menu',async()=>{
        await basePage.navigateToSelectMenuUrl();
        await browser.pause(2000);
        await expect(browser).toHaveUrl("https://demoqa.com/select-menu");
    })

    it('click on the value dropdown',async()=>{
        await homePage.clickOnValue();
        await homePage.clickOnDropdown();
        await browser.pause(2000);
        let elem = await homePage.titleHeaderLabel();
        await expect(elem).toHaveText("Select Menu")
    })

    it('click on the one dropdown',async()=>{
        await homePage.clickOnTitle();
        await homePage.clickOnTitleDropDown();
        await browser.pause(2000);
        let elem = await homePage.selectValueHeader();
        await expect(elem).toExist();
    })

    it('select the color from menu',async()=>{
        await homePage.selectMenuDropdown().scrollIntoView;
        await browser.pause(2000);
        let elem = await homePage.oldStyleText();
        await expect(elem).toHaveText("Old Style Select Menu")
     })

})

