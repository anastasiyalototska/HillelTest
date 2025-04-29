import { faker } from '@faker-js/faker';

describe('User Registration', () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = `test+${Date.now()}@example.com`;
  const password = 'Password123';
  const mismatchedPassword = 'Password321';
  const shortPassword = 'P1a';
  const longName = 'a'.repeat(21);
  const shortName = 'A';
  const invalidEmail = 'invalid-email';

  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
    cy.contains('button', 'Sign In').click(); 
    cy.contains('button', 'Registration').click(); 
  });

  it('should register a new user successfully', () => {
    cy.get('#signupName').type(firstName);
    cy.get('#signupLastName').type(lastName);
    cy.get('#signupEmail').type(email);
    cy.get('#signupPassword').type(password, { sensitive: true });
    cy.get('#signupRepeatPassword').type(password, { sensitive: true });
    cy.contains('button', 'Register').click();
    cy.contains('a', 'Log out').should('be.visible');
  });

  it('should display "Name required" when the name field is left empty', () => {
    cy.get('#signupName').focus().blur();
    cy.contains('.invalid-feedback p', 'Name required').should('be.visible');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('should show error for empty last name', () => {
    cy.get('#signupLastName').focus().blur();
    cy.contains('.invalid-feedback p', 'Last name required').should('be.visible');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('should show error for empty email', () => {
    cy.get('#signupEmail').focus().blur();
    cy.contains('.invalid-feedback p', 'Email required').should('be.visible');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('should show error for invalid email format', () => {
    cy.get('#signupEmail')
      .type(invalidEmail)
      .blur();                
    cy.contains('.invalid-feedback p', 'Email is incorrect').should('be.visible');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('should show error for empty password', () => {
    cy.get('#signupPassword').focus().blur();
    cy.contains('.invalid-feedback p', 'Password required').should('be.visible');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('should show error for password too short', () => {
    cy.get('#signupPassword')
    .type(shortPassword, { sensitive: true })
    .blur();
    cy.contains('.invalid-feedback p', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
      .should('be.visible');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('should show error for password missing required character types', () => {
    cy.get('#signupPassword')
    .type('password', { sensitive: true })
    .blur();
    cy.contains('.invalid-feedback p', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
      .should('be.visible');
      cy.contains('button', 'Register').should('be.disabled');
  });

  it('should show error for empty re-enter password', () => {
    cy.get('#signupRepeatPassword').focus().blur();
    cy.contains('.invalid-feedback p', 'Re-enter password required').should('be.visible');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('should show error if passwords do not match', () => {
    cy.get('#signupName').type(firstName);
    cy.get('#signupLastName').type(lastName);
    cy.get('#signupEmail').type(email);
    cy.get('#signupPassword').type(password, { sensitive: true });
    cy.get('#signupRepeatPassword')
    .type(mismatchedPassword, { sensitive: true })
    .blur();
    cy.contains('.invalid-feedback p', 'Passwords do not match').should('be.visible');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('should show error for name too short', () => {
    cy.get('#signupName').
    type(shortName)
    .blur();
    cy.contains('.invalid-feedback p', 'Name has to be from 2 to 20 characters long')
      .should('be.visible');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('should show error for name too long', () => {
    cy.get('#signupName')
    .type(longName)
    .blur();
    cy.contains('.invalid-feedback p', 'Name has to be from 2 to 20 characters long')
      .should('be.visible');
      cy.contains('button', 'Register').should('be.disabled');
  });

  it('should trim extra whitespace in first name', () => {
    const nameWithWhitespace = '   John   ';
    cy.get('#signupName')
    .type(nameWithWhitespace)
    .blur();
    cy.get('#signupName').should('have.value', nameWithWhitespace.trim());
  });

  it('should trim extra whitespace in last name', () => {
    const lastNameWithWhitespace = '   Doe   ';
    cy.get('#signupLastName')
    .type(lastNameWithWhitespace)
    .blur();
    cy.get('#signupLastName').should('have.value', lastNameWithWhitespace.trim());
  });


  it('should enable Register button when form is valid', () => {
    cy.get('#signupName').type(firstName);
    cy.get('#signupLastName').type(lastName);
    cy.get('#signupEmail').type(email);
    cy.get('#signupPassword').type(password, { sensitive: true });
    cy.get('#signupRepeatPassword').type(password, { sensitive: true });
    cy.contains('button', 'Register').should('not.be.disabled');
  });
});
