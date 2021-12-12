import {MyAcountPageItems} from "./items"

export class MyAcountPageActions{

    constructor()
    {
        this.items = new MyAcountPageItems();
    }

    visitMyAcountPage()
    {
        cy.visit("https://shop.demoqa.com/my-account/")
    }

    typeLoginUserName(userName)
    {
      
        this.items.loginUserNameFiled()
            .type(userName,{delay:10})
        cy.wrap(userName).as("userName")
     

    }

    typeLoginPassword(password)
    {
        this.items.loginPasswordFiled()
            .type(password,{delay:10})
    }

    clickRememberMeCheckBox()
    {
        this.items.rememberMeCheckBox()
            .check({force:true})
    }

    clickLoginButton()
    {
        this.items.loginButton()
            .click({force:true})
    }

    typeRegisterUserName(userName)
    {
        this.items.registerUserName()
            .type(userName,{delay:20})
    }

    typeRegisterPassword(password)
    {
        this.items.registerPassword()
            .type(password)
    }

    typeRegisterEmail(email)
    {
        this.items.resgisterEmail()
            .type(email)
    }

    clickRegisterButton()
    {
        this.items.registerButton()
            .click({force:true})
    }


}