import {BasePage} from "./basePage";

export class SelectablePage extends BasePage {
    static get url() {
        return '/selectable';
    }

    static get pageTitle() {
        return cy.get('h1.text-center');
    }
}