describe('FizzzzzzBuzzzzz', () => {
  beforeEach(() => {
    cy.visit('localhost')
  })
  it('Sum', () => {
    cy.window().then((window) => {
      const array = window.add("1:2:-5:")
      console.log(array)
      let summich = 0;
      array.forEach(number => summich += +number)
      assert.equal(summich, 3)
    })
  })
})