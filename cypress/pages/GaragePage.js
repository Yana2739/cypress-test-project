class GaragePage {

    openAddCarModal() {
      cy.contains('button', 'Add car').click()
    }
  
    selectBrand(brand) {
      cy.get('#addCarBrand').select(brand)
    }
  
    selectModel(model) {
      cy.get('#addCarModel').select(model)
    }
  
    typeMileage(mileage) {
      cy.get('#addCarMileage').clear().type(mileage)
    }
  
    clickAddButton() {
      cy.get('.modal-footer')
        .contains('button', 'Add')
        .click()
    }
  
    addCar(brand, model, mileage) {
      this.openAddCarModal()
      this.selectBrand(brand)
      this.selectModel(model)
      this.typeMileage(mileage)
      this.clickAddButton()
    }
  }
  
  export default new GaragePage()