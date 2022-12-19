/// <reference types="Cypress" />
describe('FizzzzzzBuzzzzz', () => {
  beforeEach(() => {
    cy.visit('localhost')
  })
  it('Fizz if 3', () => {
    cy.window().then((window) => {
      const result = window.fizzbuzz(3)
      assert.equal(result, 'Fizz')
    })
  })
  it('Fizz if 5', () => {
    cy.window().then((window) => {
      const result = window.fizzbuzz(5)
      assert.equal(result, 'Buzz')
    })
  })
  it('FizzBuzz if 3 and 5', () => {
    cy.window().then((window) => {
      const result = window.fizzbuzz(15)
      assert.equal(result, 'FizzBuzz')
    })
  })
})