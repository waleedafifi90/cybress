export class MyAcountPageItems{
    constructor(){}

    loginUserNameFiled()
    {
        return cy.get('input[id="username"]');
    }

    loginPasswordFiled()
    {
        return cy.get('input[id="password"]');
    }

    rememberMeCheckBox()
    {
        return cy.get('input[id="rememberme"]')
    }

    loginButton()
    {
        return cy.get('button[name="login"]')
    }

    registerUserName()
    {
        return cy.get('input[id="reg_username"]')
    }

    resgisterEmail()
    {
        return cy.get('input[id="reg_email"]')
    }

    registerPassword()
    {
        return cy.get('input[id="reg_password"]')
    }

    registerButton()
    {
        return cy.get('button[name="register"]')
    }

    errorAlert()
    {
        return cy.get('ul[class="woocommerce-error"] > li')
    }

    passwordStrength()
    {
        return cy.get('div[class="woocommerce-password-strength"]')
    }

}