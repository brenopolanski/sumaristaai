describe("Fazendo o upload de um pdf", () => {
  beforeEach(() => {
    cy.login(
      Cypress.env("userTest").email,
      Cypress.env("userTest").password,
    ).then(() => {
      cy.url().should("include", "/");
    });
  });

  it("Deve fazer o upload de um arquivo pdf", () => {
    cy.uploadFile("test.pdf", "application/pdf");
  });
});
