describe('adding new post', () => {
    it('should create a new post and show it on the main page', () => {
        cy.visit('/');
        cy.contains('New Post').click()
        cy.getByLabel('Title').type('Something')
        cy.getByLabel('Content').type('Something else')
        cy.contains('Create').click()
        cy.contains('Something')
        cy.contains('Something else')
    });
});