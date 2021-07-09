/* eslint-disable jest/valid-expect */
/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';
import PlayerCard from './PlayerCard';
import '../../src/assets/styles/index.scss';

it('renders the card with all data', () => {
  mount(<PlayerCard
    isActive
    realName="Peter Parker"
    playerName="Spiderman"
    asset="tingling spider senses"
    onClick={() => alert('clicked me')} />);
  cy.get('.player-card.active');
  cy.get('.player-card').as('card')
    .contains('Peter Parker');
  cy.get('@card')
    .contains('Spiderman');
  cy.get('@card')
    .contains('tingling spider senses')
  cy.get('@card')
    .click();

  // as the button is only visible for screen readers use force
  cy.get('button').click({force: true});
});

it('handles too long text by shrinking it', () => {
  cy.viewport(150, 150)
  mount(<PlayerCard
    realName="Peter Middlename Parker"
    playerName="Spiderman the man spider"
    asset="tingling spider senses"
    onClick={() => null} />);
  cy.get('.text-truncate').each((jQueryObject) => {
    // if truncated, the element has a true and would be width
    // https://stackoverflow.com/a/19304167
    expect(jQueryObject.width() < jQueryObject[0].scrollWidth).to.equal(true);
  });

  // to ensure the logic holds true, do the check in the other direction
  cy.viewport(500, 500)
  cy.get('.text-truncate').each((jQueryObject) => {
    expect(jQueryObject.width() >= jQueryObject[0].scrollWidth).to.equal(true);
  });
})