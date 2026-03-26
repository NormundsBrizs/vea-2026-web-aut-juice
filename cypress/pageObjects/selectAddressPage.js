import { BasePage } from "./basePage";

export class SelectAddressPage extends BasePage {
    static selectAddress(country) {
        return cy.contains('mat-card', country).find('mat-radio-button').click();
    }

    static get continueButton() {
        return cy.get("button[aria-label='Proceed to payment selection']");
    }
}