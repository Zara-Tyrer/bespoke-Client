describe('Test login', () => {
  let fixture = {}

  beforeEach(() => {
    cy.viewport(1024, 768)
    cy.visit("/")
    cy.fixture('registeredUser.json').then((user) => {
      console.log("Data from fixture: ", user)
      fixture.registeredUser = user
    })
  })
  it('Should go to the login page', () => {
    cy.get('[data-cy=login]').click()
    cy.url().should('include', '/admin/login')
  })
  it('it should render the SignIn component', () => {
    cy.get('[data-cy=login]').click()
    cy.get('[data-cy=loginForm]').should('be.visible')
  })
  it('can login', () => {
    cy.get("[data-cy=login]").click()
    cy.get("[data-cy=username]").type(fixture.registeredUser.username)
    cy.get("[data-cy=password]").type(fixture.registeredUser.password)
    cy.get("[data-cy=loginButton]").click()
    cy.url().should('include', '/dashboard')
  })
})





