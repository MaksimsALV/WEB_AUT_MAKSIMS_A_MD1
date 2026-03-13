export class GridTab {
    static clickOnGrid() {
        cy.get('#demo-tab-grid').click();
    }

    static clickOnItem(gridItem) {
        cy.contains(gridItem).click();
    }
}