describe("test submit query", () => {
  let fixture = {}

  beforeEach(() => {
    cy.viewport(1024, 768)
    cy.visit("/")
    cy.fixture('query.json').then((query) => {
      console.log("Data from fixture: ", query)
      fixture.query = query
    })
  })
  it('Should go to the contact page', () => {
    cy.get('[data-cy=contactLink]').click()
    cy.url().should('include', '/contact')
  })
  it('can enter query', () => {
    cy.get('[data-cy=contactLink]').click()
    cy.url().should('include', '/contact')
    cy.get("[data-cy=nameQuery]").type(fixture.query.name)
    cy.get("[data-cy=emailQuery]").type(fixture.query.email)
    cy.get("[data-cy=numberQuery]").type(fixture.query.phone_number)
    cy.get("[data-cy=messageQuery]").type(fixture.query.message)
    cy.get("[data-cy=submitQuery]").click()
    cy.url().should('include', '/confirm')
  })
  
})