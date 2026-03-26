import { BasePage } from "./basePage";

export class DeliveryMethodPage extends BasePage {
    static selectDeliveryMethod(option) {
        return cy.contains('mat-row', option).find('input[type="radio"]').check();
    }

    static get continueButton() {
        return cy.get("button[aria-label='Proceed to delivery method selection']");
    }
}