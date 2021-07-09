/* eslint-disable jest/valid-expect */
/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';
import PlayerSelect from './PlayerSelect';
import '../../src/assets/styles/index.scss';

it('renders PlayerSelect with multiple cards', () => {
  cy.intercept('/api/players', { fixture: 'players.json' })
  mount(<PlayerSelect />);

  cy.get('h3')
  .contains('Loading');

  cy.get('.col-md-3:nth-of-type(3) .player-card')
  .contains('Hillary');
  
  cy.get('label[for=radio-0]').click()

  cy.get('.col-md-3:nth-of-type(3) .player-card')
  .contains('Elva');

  cy.get('label[for=radio-1]').click()

  cy.get('.col-md-3:nth-of-type(3) .player-card')
  .contains('Enid');

  cy.get('.col-md-3:nth-of-type(3) .player-card')
  .click();
  cy.get('.col-md-3:nth-of-type(3) .player-card.active');
});