import {SelectablePage} from "../pageObjects/selectablePage";
import {GridTab} from "../pageObjects/gridTab";

describe('md1 - Maksims A', () => {
    context('MD1 test scenarios', () => {
        beforeEach(() => {
            cy.task('log', 'launching test');
        });
        afterEach(function () {
            cy.task('log', 'test result state: ' + this.currentTest.state)
        });

        it('Test scenario', () => {
            SelectablePage.visit();
            SelectablePage.pageTitle.should('contain.text', 'Selectable')
            GridTab.clickOnGrid()
            GridTab.clickOnItem('Two')
            GridTab.clickOnItem('Four')
            GridTab.clickOnItem('Six')
            GridTab.clickOnItem('Eight')

            cy.contains('Two').should('have.class', 'active')
            cy.contains('Four').should('have.class', 'active')
            cy.contains('Six').should('have.class', 'active')
            cy.contains('Eight').should('have.class', 'active')

            cy.contains('One').should('not.have.class', 'active')
            cy.contains('Three').should('not.have.class', 'active')
            cy.contains('Five').should('not.have.class', 'active')
            cy.contains('Seven').should('not.have.class', 'active')
            cy.contains('Nine').should('not.have.class', 'active')
        });
    });
});