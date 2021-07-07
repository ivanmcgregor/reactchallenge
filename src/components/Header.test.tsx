import React from 'react';
import { mount } from '@cypress/react';
import Header from './Header';
import '../../src/assets/styles/index.scss';

it('renders the app', () => {
  mount(<Header />);
  cy.get('nav').contains('CardGame');
});