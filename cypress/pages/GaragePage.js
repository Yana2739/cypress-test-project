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
  }
  
  export default new GaragePage()