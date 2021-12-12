
import {MyAcountPageActions} from "./actions"
import {MyAcountPageTestss} from "./tests"

export class MyAcountPage{
    constructor()
    {
        this.actions = new MyAcountPageActions()
        this.tests = new MyAcountPageTestss()
    }
}