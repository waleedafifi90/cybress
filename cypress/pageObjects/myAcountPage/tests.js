import {MyAcountPageItems} from "./items"

export class MyAcountPageTestss{

    constructor()
    {
        this.items = new MyAcountPageItems();
    }

    checkLoginUserNameFilled()
    {
        cy.get("@userName").then((userName)=>{
            this.items.loginUserNameFiled()
            .should("have.value",userName)
        })
   
    }

    checkLoginPasswordFilled()
    {
        this.items.loginPasswordFiled() 
            .should("not.have.value", "")
            .and("have.attr","type","password")
    }

    checkRememberMeChecked()
    {
        this.items.rememberMeCheckBox()
            .should("be.checked")
    }

    checkPasswordEmptyAlert()
    {
        this.items.errorAlert()
            .should("contain.text","Error: The password field is empty.")
    }



}