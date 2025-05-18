/// <reference types="cypress" />
import "cypress-file-upload";

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      uploadFile(filePath: string, mimeType: string): Chainable<void>;
      viewSummaries(): Chainable<void>;
    }
  }
}

Cypress.Commands.add("login", (email: string, password: string) => {
  cy.visit(`/sign-in`);
  cy.get("#identifier-field").should("be.visible").type(email);
  cy.get(".cl-formButtonPrimary").should("be.enabled").click();

  cy.get("#password-field", { timeout: 10000 })
    .should("be.visible")
    .type(password);
  cy.get(".cl-formButtonPrimary").should("be.enabled").click();

  cy.url({ timeout: 10000 }).should("include", "/");
});

Cypress.Commands.add("uploadFile", (filePath: string, mimeType: string) => {
  cy.visit(`/upload`);
  cy.get("#file").attachFile({
    filePath,
    mimeType,
  });

  cy.get('[cy-data="upload-submit"]').click();
  cy.url({ timeout: 60000 }).should("match", new RegExp(`/summaries`));
  cy.contains(`Fonte: ${filePath.split("/").pop()}`).should("be.visible");
});

Cypress.Commands.add("viewSummaries", () => {
  cy.visit(`/dashboard`);
  cy.wait(10000);
  cy.get('[cy-data="summary-card-content"]').should("be.visible");
  cy.get('[cy-data="link-to-summary"]').should("be.visible");
  cy.get('[cy-data="delete-button"]').should("be.visible");
});

export {};
