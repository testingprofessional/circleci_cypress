/// <reference types="cypress" />
//https://docs.cypress.io/guides/overview/why-cypress

describe('Ga naar de Google website', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com')
    })

    it('tik wat text in the zoekbar en klik enter en check het eerste resultaat', () => {
        const text = 'test'
        cy.contains('Ik ga akkoord').click()
        cy.get('[name="q"]').type(`${text}{enter}`)
        cy.contains('COVID').should('exist')
    })

    it('Doe een API test op een vreemde producten website', () => {
        cy.request({
            method:'GET',
            url: 'https://serverest.dev/produtos'
        })
        .should((response) => {
            cy.log(JSON.stringify(response.body.produtos))

        expect(response.status, "testing").to.eq(200)
        })
    })
})