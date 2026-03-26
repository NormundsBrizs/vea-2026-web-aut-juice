import { BasePage } from "./basePage";

export class OrderCompletionPage extends BasePage {
    static get completionText() {
        return cy.get('.confirmation');
    }
}