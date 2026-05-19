class ExpensesPage {

    openAddExpenseModal() {
      cy.contains('Add fuel expense').click()
    }
  
    typeMileage(mileage) {
      cy.get('#addExpenseMileage').clear().type(mileage)
    }
  
    typeLiters(liters) {
      cy.get('#addExpenseLiters').clear().type(liters)
    }
  
    typeTotalCost(cost) {
      cy.get('#addExpenseTotalCost').clear().type(cost)
    }
  
    clickAddExpenseButton() {
      cy.get('.modal-footer')
        .contains('button', 'Add')
        .click()
    }
  }
  
  export default new ExpensesPage()