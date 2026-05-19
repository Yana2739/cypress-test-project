import GaragePage from '../pages/GaragePage'
import ExpensesPage from '../pages/ExpensesPage'

describe('Garage and expenses tests', () => {

  beforeEach(() => {
    cy.login()
  })

  it('Should add a new car', () => {

    GaragePage.openAddCarModal()

    GaragePage.selectBrand('BMW')

    GaragePage.selectModel('X5')

    GaragePage.typeMileage('100')

    GaragePage.clickAddButton()

    cy.contains('BMW X5')
  })

  it('Should add fuel expense', () => {

    GaragePage.openAddCarModal()

    GaragePage.selectBrand('Audi')

    GaragePage.selectModel('TT')

    GaragePage.typeMileage('200')

    GaragePage.clickAddButton()

    ExpensesPage.openAddExpenseModal()

    ExpensesPage.typeMileage('300')
    
    ExpensesPage.typeLiters('20')
    
    ExpensesPage.typeTotalCost('1000')
    
    ExpensesPage.clickAddExpenseButton()
    
    cy.contains('20')
    cy.contains('1000')
  })
})