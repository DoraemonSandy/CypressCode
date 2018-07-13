describe('My first test', function() {
    it('Enter kooboo', function() {
       cy.visit('/')
       cy.get('#tab_account_login input:first')
         .type('jiajia')
         .get('#tab_account_login input[type="password"]')
         .type('jiajia123')
         .get('.btn.blue')
         .click()
        cy.url().should('include', '/sites'||'/Sites')
         .get('.dropdown-toggle')
         .contains('jiajia')
         .click()
       cy.contains('Sign out')
         .click()
        
    })
    // it('Click type', function(){
    //     cy.visit('https://example.cypress.io')
    //     cy.contains('type').click()
    //     cy.url().should('include', '/commands/actions')
    //     cy.get('.action-email')
    //       .type('jiajia@kooboo.cn')
    //       .should('have.value', 'jiajia@kooboo.cn')
    // }

    // )
})