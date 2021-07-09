/* eslint-disable no-undef */
/// <reference types="cypress" />

  
it('can handle the item selection across two components', () => {
  cy.intercept('/api/players', { fixture: 'players.json' })

  cy.visit('http://localhost:3000/')
  
  cy.get('.col-md-4:nth-of-type(3) .player-card')
    .contains('Hillary')
    .click();
  cy.get('.col-md-4:nth-of-type(3) .player-card.active');
  cy.get('dd').contains('Hillary')
})