/* eslint-disable jest/valid-expect */
/// <reference types="cypress" />

import React, {useState} from 'react';
import { mount } from '@cypress/react';
import PlayerSelect from './PlayerSelect';
import '../../src/assets/styles/index.scss';

it('renders PlayerSelect with multiple cards', () => {
  const state = {selectedPlayer: undefined}
  const setSelectedPlayer = (player:any) => {
    state.selectedPlayer = player;
  };

  cy.intercept('/api/players', { fixture: 'players.json' })
  mount(<PlayerSelect
      selectedPlayer={state.selectedPlayer}
      setSelectedPlayer={setSelectedPlayer}
    />);

  cy.get('h3')
  .contains('Loading');

  cy.get('.col-md-4:nth-of-type(3) .player-card')
  .contains('Hillary');
  
  cy.get('label[for=radio-0]').click()

  cy.get('.col-md-4:nth-of-type(3) .player-card')
  .contains('Elva');

  cy.get('label[for=radio-1]').click()

  cy.get('.col-md-4:nth-of-type(3) .player-card')
  .contains('Enid');

  // testing the player selection in cypress/integration/app.spec.js
});