/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001');
    });
  
    // https://on.cypress.io/interacting-with-elements
  
    it('click on Submit a Project button and navigate to /newpage', () => {
        cy.contains('Submit a Project').click();
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/newproject');
        });
    });

    it('click on Become a Volunteer button and navigate to /signup/volunteer', () => {
        cy.contains('Become a Volunteer').click();
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/signup/volunteer');
        });
    });

    it('click on About us button and navigate to /about', () => {
        cy.get('#drawerButton').click();
        cy.contains('About us').click();
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/about');
        });
    });

    it('click on Search button and navigate to /search', () => {
        cy.get('#drawerButton').click();
        cy.contains('Search').click();
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/search');
        });
    });
});
