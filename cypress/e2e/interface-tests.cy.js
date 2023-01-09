describe('Interface testing with login', () => {
  beforeEach(() => {
    cy.visit('http://localhost')
    cy.get('input#username-field').type('root')
    cy.get('input#password-field').type('sUP3R53CR3T#')
    cy.get('button[type=submit').click()
    cy.contains('Home').click()
  })
  it('Test with login', () => {
    cy.request('http://localhost/API/V1/Products').then((response) => {
      console.log(response.body)
    })
  })
  it('Test with login', () => {
    cy.request('http://localhost/API/V1/Home').then((response) => {
      console.log(response.body)
    })
  })
})
describe('Interface testing without login', () => {
  it('Test without login', () => {
    cy.request('http://localhost/API/V1/NoLogHome').then((response) => {
      console.log(response.body)
    })
  })
})