module.exports = new class HomePage{

    get firstname(){
        return $("#firstName")
    }

    get lastname(){
        return $('#lastName')
    }

    get userEmail(){
        return $('#userEmail')
    }

    get radio(){
        return $('[for="gender-radio-2"]')
    }

    get mobileNo(){
        return $('#userNumber')
    }
    
    get hobbies(){
        return $("[for='hobbies-checkbox-2']")
    }

    get clickBtn(){
        return $('#alertButton')
    }

    get value(){
        return $("(//div[@class=' css-1wy0on6'])[1]")
    }

    get selectDropdown(){
        return $("//div[text()='Group 2, option 1']")
    }

    get title(){
      return $("(//div[@class=' css-1wy0on6'])[2]")
    }

    get selectTitle(){
        return $("//div[text()='Mrs.']")
    }

    get selectMenu(){
        return $('#oldSelectMenu')
    }

    test(){
        return $('#userName-label');
    }

    emailLabel(){
        return $('#userEmail-label');
    }

    mobileNoLabel(){
         return $("#userNumber-label")
    }

    dobLabel(){
        return $("#dateOfBirth-label");
    }

    hobbieLabel(){
        return $("(//label[@class='form-label'])[6]");
    }

    headerLabel(){
        return $("//div[@class='main-header']");
    }

    titleHeaderLabel(){
        return $("//div[@class='main-header']");
    }

    selectValueHeader(){
        return $("(//div[@class='col-md-6 col-sm-12'])[1]");
    }

    oldStyleText(){
        return $("(//div[@class='col-md-6 col-sm-12'])[5]");
    }


    async enterDetails(firstName,lastName,email){
        await this.firstname.setValue(firstName)
        await this.lastname.setValue(lastName)
        await this.userEmail.setValue(email)
    }

    async clickOnRadioBtn(){
        await this.radio.click();
    }

    async enterMobileNo(number){
        await this.mobileNo.setValue(number)
    }

    async clickOnHobbies(){
        await this.hobbies.click();
    }

    async clickOnAlertBtn(){
        await this.clickBtn.click();
    }

    async clickOnValue(){
        await this.value.click();
    }

    async clickOnDropdown(){
        await this.selectDropdown.click();
    }

    async clickOnTitle(){
        await this.title.click();
    }

    async clickOnTitleDropDown(){
        await this.selectTitle.click();
    }

    async selectMenuDropdown(){
        await this.selectMenu.selectByIndex(3);
    }
}