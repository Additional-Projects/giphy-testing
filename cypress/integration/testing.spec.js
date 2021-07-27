/// <reference types="cypress" />

describe('Giphy Testing', () => {

    //Trending Section Testing
    it('Trending Section Test', () => {
        cy.visit('https://giphy.com/').contains('GIPHY');
        cy.title().should('eq', 'GIPHY - Be Animated');
        cy.location('protocol').should('eq', 'https:')
        cy.get(':nth-child(1) > .Container-sc-swtq0n > .Title-sc-kvmtvl')
            .contains('Trending')
            .click();
        cy.url().should('include', 'trending-gifs')
        cy.get('[href="https://giphy.com/gifs/helloall-hi-oh-hey-2W7E1aS87BHsXEiwWq"]').click()
        
    })

    //Search Engine Testing
    it('Search Engine Test', () => {
        cy.visit('https://giphy.com/')
        cy.get('.Input-sc-w75cdz').type('Funny gifs{enter}');
        cy.url().should('include', 'Funny-gifs')

    })
})