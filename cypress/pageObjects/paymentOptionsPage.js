import { BasePage } from "./basePage";

export class PaymentOptionsPage extends BasePage {
    static selectPaymentOption(option) {
        return cy.contains('mat-row', option).find('input[type="radio"]').check();
    }

    static get continueButton() {
        return cy.get("button[aria-label='Proceed to review']");
    }
}