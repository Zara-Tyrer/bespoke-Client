describe("test submit order", () => {
  let fixture = {}

  beforeEach(() => {
    cy.viewport(1024, 768)
    cy.visit("/")
    cy.fixture('order.json').then((order) => {
      console.log("Data from fixture: ", order)
      fixture.order = order
    })
  })
  it('Should go to the new order page', () => {
    cy.get('[data-cy=orderLink]').click()
    cy.url().should('include', '/orders/new')
  })
  it('can enter order and go to confirm page', () => {
    cy.get('[data-cy=orderLink]').click()
    cy.fixture('nails.png').then(fileContent => {
        cy.get("[data-cy=fileUpload]").attachFile({
            fileContent: fileContent.toString(),
            fileName: 'nails.png',
            mimeType: 'image/png'
        });
    });
    cy.get("[data-cy=picSubmit]").click()
    cy.wait(5000)
    cy.get("[data-cy=nameOrder]").type(fixture.order.name)
    cy.get("[data-cy=addressOrder]").type(fixture.order.address)
    cy.get("[data-cy=numberOrder]").type(fixture.order.phone_number)
    cy.get("[data-cy=emailOrder]").type(fixture.order.email)
    cy.get("[data-cy=styleOrder]").type(fixture.order.nail_style)
    cy.get("[data-cy=lengthOrder]").select("17mm")
    cy.get("[data-cy=shapeOrder]").select("Round")
    cy.get("[data-cy=submitOrder]").click()
    cy.wait(5000)
    cy.url().should('include', '/confirm')
  })
})