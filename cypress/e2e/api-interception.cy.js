import GaragePage from '../pages/GaragePage'

describe('Cars and expenses API with UI interception', () => {

  const carData = {
    brand: 'Audi',
    model: 'TT',
    mileage: 200
  }

  const expenseData = {
    reportedAt: '2026-05-21',
    mileage: 300,
    liters: 20,
    totalCost: 1000,
    forceMileage: false
  }

  let createdCarId

  beforeEach(() => {

    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')

    cy.contains('Sign In').click()

    cy.get('#signinEmail')
    .type('yana_qauto_20260519@mail.com')

    cy.get('#signinPassword')
      .type('Qwerty123')

    cy.contains('Login').click()
  })

  it('Should create car via UI and validate it in API', () => {

    cy.intercept('POST', '**/api/cars').as('createCar')

    GaragePage.addCar(
      carData.brand,
      carData.model,
      carData.mileage.toString()
    )

    cy.wait('@createCar').then((interception) => {

      expect(interception.response.statusCode).to.eq(201)

      createdCarId = interception.response.body.data.id

      expect(createdCarId).to.exist

      cy.request('GET', '/api/cars').then((response) => {

        expect(response.status).to.eq(200)

        const createdCar = response.body.data.find(
          (car) => car.id === createdCarId
        )

        expect(createdCar).to.exist
        expect(createdCar.brand).to.eq(carData.brand)
        expect(createdCar.model).to.eq(carData.model)
      })
    })
  })

  it('Should create expense via API and validate it in UI', () => {

    cy.intercept('POST', '**/api/cars').as('createCar')

    GaragePage.addCar(
      carData.brand,
      carData.model,
      carData.mileage.toString()
    )

    cy.wait('@createCar').then((interception) => {

      createdCarId = interception.response.body.data.id

      cy.createExpense({
        carId: createdCarId,
        reportedAt: expenseData.reportedAt,
        mileage: expenseData.mileage,
        liters: expenseData.liters,
        totalCost: expenseData.totalCost,
        forceMileage: expenseData.forceMileage
      }).then((response) => {

        expect(response.status).to.eq(200)

        expect(response.body.data.carId).to.eq(createdCarId)

        cy.contains('Fuel expenses').click()

        cy.contains(carData.brand)
        cy.contains(carData.model)
        cy.contains(expenseData.liters)
        cy.contains(expenseData.totalCost)
      })
    })
  })
})