import { getGreeting } from '../support/app.po';

describe('tagr-ui', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to tagr-ui!');
  });
});
