class GaragePage {
  openGarage() {
    cy.get('nav.sidebar a[href="/panel/garage"]').click();
  }

  addCar(brand, model, mileage) {
    cy.contains("button", "Add car").click();
    cy.get("#addCarBrand").select(brand);
    cy.get("#addCarModel").select(model);
    cy.get("#addCarMileage").type(mileage);
    cy.get(".modal-footer button.btn-primary").contains("Add").click();
  }
}

export default new GaragePage();
