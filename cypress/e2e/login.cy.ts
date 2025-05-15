describe("Login", () => {
  it("Deve fazer login com sucesso", () => {
    cy.login(
      Cypress.env("userTest").email,
      Cypress.env("userTest").password,
    ).then(() => {
      cy.url().should("include", "/");
    });
  });
});
