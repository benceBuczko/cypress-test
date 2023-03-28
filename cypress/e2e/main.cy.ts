describe('main page and navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('should have 2 posts rendered', () => {
    cy.get('[data-testid=card]').its('length').should('eq', 2);
  })

  it('should navigate to the post clicked', () => {
    cy.get('[data-testid=card]').first().click();
    cy.url().should('include', '/1');
    cy.get('[data-testid=card]').should('have.length', 1);
  })

  it('should navigate to the home page', () => {
    cy.get('[data-testid=card]').first().click();
    cy.contains('Home').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  })
})