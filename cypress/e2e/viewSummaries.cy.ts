describe("Fazendo o upload de um pdf", () => {
  beforeEach(() => {
    cy.login(
      Cypress.env("userTest").email,
      Cypress.env("userTest").password,
    ).then(() => {
      cy.url().should("include", "/");
    });
  });

  it("Verifica se o card do sumário está visível", () => {
    cy.uploadFile("test.pdf", "application/pdf");
    cy.viewSummaries();
  });
});
