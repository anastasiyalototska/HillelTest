class ExpensesPage {
  addFuelExpense(liters, price, mileage) {
    cy.contains("button", "Add fuel expense").click();
    cy.get("#addExpenseLiters").type(liters);
    cy.get("#addExpenseTotalCost").type(price);
    cy.get("#addExpenseMileage").type(mileage);
    cy.get(".modal-footer button.btn-primary").contains("Add").click();
  }
}

export default new ExpensesPage();
