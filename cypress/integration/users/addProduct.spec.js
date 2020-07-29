describe("test submit product", () => {
  let fixture = {}

  beforeEach(() => {
    cy.viewport(1024, 768)
    cy.visit("/")
    cy.fixture('product.json').then((product) => {
      console.log("Data from fixture: ", product)
      fixture.product = product
    })
    cy.get("[data-cy=login]").click()
    cy.get("[data-cy=username]").type("Jade")
    cy.get("[data-cy=password]").type("password123")
    cy.get("[data-cy=loginButton]").click()
  })

  it('Should go to the new product page', () => {
    cy.get("[data-cy=productLink]").click()
    cy.get("[data-cy=newProductButton]").click()
    cy.fixture('nails.png').then(fileContent => {
      cy.get("[data-cy=fileUpload]").attachFile({
          fileContent: fileContent.toString(),
          fileName: 'nails.png',
          mimeType: 'image/png'
      });
    });
    cy.get("[data-cy=picSubmit]").click()
    cy.get("[data-cy=productLength]").select("18")
    cy.get("[data-cy=productShape]").select("Round")
    cy.get("[data-cy=productStyle]").type(fixture.product.nail_style)
    cy.get("[data-cy=productCost]").type(fixture.product.cost)
    cy.get("[data-cy=productSubmit]").click()
    cy.url().should('include', '/products')
  })
})