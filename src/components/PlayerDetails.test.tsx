/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';
import PlayerDetails from './PlayerDetails';
import '../../src/assets/styles/index.scss';

it('renders PlayerDetails when no player is selected', () => {
  mount(<PlayerDetails player={undefined} />);

  cy.get('.card')
  .contains('Select a player to continue');
});

it('renders PlayerDetails and allows to select a player', () => {
  cy.intercept('/api/player/submit', { times: 1 }, { forceNetworkError: true });

  const player = {realName: 'Jim', playerName: 'Waldbrand', asset: 'Feuerlöscher'};
  mount(<PlayerDetails player={player} />);

  cy.get('dd')
  .contains('Jim');

  cy.get('.btn').click();

  cy.get('.alert-danger');

  cy.intercept('POST', '/api/player/submit', 'success');

  cy.get('.btn').click();

  cy.get('.alert-success')
});