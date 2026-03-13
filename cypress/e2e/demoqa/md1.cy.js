import {SelectablePage} from "../pageObjects/selectablePage";
import {GridTab} from "../pageObjects/gridTab";

describe('md1 - Maksims A', () => {
    context('MD1 test scenarios', () => {
        beforeEach(() => {
            cy.task('log', 'launching test');
            SelectablePage.visit();
        });

        it('a). open selectable page', () => {
            cy.contains('Selectable')
        });

        it('b). click grid tab', () => {
            GridTab.clickOnGrid()
        });

        it('c). click one, two..', () => {
            GridTab.clickOnGrid()
            GridTab.clickOnItem('Two')
            GridTab.clickOnItem('Four')
            GridTab.clickOnItem('Six')
            GridTab.clickOnItem('Eight')
        });

        it('d). validate two four six and eight are highlighted', () => {
            GridTab.clickOnGrid()
            GridTab.clickOnItem('Two')
            GridTab.clickOnItem('Four')
            GridTab.clickOnItem('Six')
            GridTab.clickOnItem('Eight')

            cy.contains('Two').should('have.class', 'active')
            cy.contains('Four').should('have.class', 'active')
            cy.contains('Six').should('have.class', 'active')
            cy.contains('Eight').should('have.class', 'active')
        });

        it('e). validate one three five seven and nine are not highlighted', () => {
            GridTab.clickOnGrid()
            GridTab.clickOnItem('Two')
            GridTab.clickOnItem('Four')
            GridTab.clickOnItem('Six')
            GridTab.clickOnItem('Eight')

            cy.contains('One').should('not.have.class', 'active')
            cy.contains('Three').should('not.have.class', 'active')
            cy.contains('Five').should('not.have.class', 'active')
            cy.contains('Seven').should('not.have.class', 'active')
            cy.contains('Nine').should('not.have.class', 'active')
        });
    });
});