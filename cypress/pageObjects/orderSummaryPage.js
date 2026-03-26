import { BasePage } from "./basePage";

export class OrderSummaryPage extends BasePage {
    static get placeOrderButton() {
        return cy.get('#checkoutButton');
    }
}