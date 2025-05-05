import GaragePage from "../support/pages/Garage";
import ExpensesPage from "../support/pages/Expenses";

describe("Garage and Expenses", () => {
  before(() => {
    cy.visit("/");
    cy.get("button").contains("Sign In").click();
    cy.get("#signinEmail").type(Cypress.env("user").email);
    cy.get("#signinPassword").type(Cypress.env("user").password);
    cy.get("button").contains("Login").click();
  });

  it("add a car and expense", () => {
    GaragePage.openGarage();
    GaragePage.addCar("BMW", "X5", 15000);

    ExpensesPage.addFuelExpense("40", "100", 1);
  });
});
