/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/projects/submit');
    });

    it('Test legal recomdations', () => {
        cy.get('a:contains("Please read this recommendation from our legal team")').click(); //TODO: update test when the recommendatiosn from our legal team is updated for modal pop up or page navigation
    });
  
    it('Fill discription textarea for project details', () => {
        cy.get('textarea[placeholder="Description"]').type("This is my main project").should("have.value","This is my main project");
    });

    it('Check project location is filling', () => {
        cy.get('input[placeholder="Location"]').type("Los Angeles").should("have.value","Los Angeles");
    });  

    it('test checkboxes for medical staff advisors', ()=>{
        cy.get('[value="registered-nurse"]').check().should("be.checked");
        cy.get('[value="medical-student"]').check().should("be.checked");
        cy.get('[value="resident"]').check().should("be.checked");
        cy.get('[value="physician-assistant"]').check().should("be.checked");
        cy.get('[value="attending"]').check().should("be.checked");
        cy.get('[value="intern"]').should("be.disabled");
    });
    it('test checkboxes for Engineers', ()=>{
        cy.get('[value="mechanical-engineer"]').check().should("be.checked");
        cy.get('[value="mechanical-engineer-with-fea-experience"]').check().should("be.checked");
        cy.get('[value="mechatronics-engineer"]').check().should("be.checked");
        cy.get('[value="electrical-engineer"]').should("be.disabled");
    });
    it('test checkboxes for Manufacturing', ()=>{
        cy.get('[value="fdm-3-d-printer"]').check().should("be.checked");
        cy.get('[value="sls-nylon-3-d-printer"]').check().should("be.checked");
        cy.get('[value="sla-3-d-printer"]').check().should("be.checked");
        cy.get('[value="machinist"]').check().should("be.checked");
    });
    it('test checkboxes for legal', ()=>{
        cy.get('[value="lawyer"]').should("be.disabled");
        cy.get('[value="barrister"]').check().should("be.checked");
        cy.get('[value="barrister"]').check().should("be.checked");
    });
    it('test checkboxes for computer-aided design', ()=>{
        cy.get('[value="inventor"]').should("be.disabled");
        cy.get('[value="solid-works"]').check().should("be.checked");
    });

    it('test form submission', ()=>{
        cy.get('[type="submit"]').click();
        //cy.location().should((location) => {
         //   expect(location.pathname).to.eq('/projects/submit');// needs to be updated once the redirection or prompt of success is added
       // });
    });
    




});
