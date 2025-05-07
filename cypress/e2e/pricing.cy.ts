describe("Seção de Preços", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Renderiza os planos corretamente com todos os textos esperados", () => {
    cy.get("#pricing").should("exist");
    cy.get("#pricing h2").should("contain.text", "Preços");

    cy.contains("Básico").should("exist");
    cy.contains("Para usuários ocasional").should("exist");
    cy.contains("R$ 5").should("exist");
    cy.contains("BRL").should("exist");
    cy.contains("/mês").should("exist");

    cy.contains("Processamento padrão").should("exist");
    cy.contains("Suporte por email").should("exist");

    cy.contains("Pro").should("exist");
    cy.contains("Para profissionais e equipes").should("exist");
    cy.contains("R$ 14,9").should("exist");
    cy.contains("BRL").should("exist");
    cy.contains("/mês").should("exist");

    cy.contains("Sumários ilimitados em PDF").should("exist");
    cy.contains("Processamento prioritário").should("exist");
    cy.contains("Suporte 24/7").should("exist");
    cy.contains("Exportação em Markdown").should("exist");

    cy.get("#pricing")
      .contains("Comprar agora")
      .should("have.attr", "href")
      .and("include", "https://buy.stripe.com/");

    cy.get("#pricing").find("a").contains("Comprar agora");
  });
});
