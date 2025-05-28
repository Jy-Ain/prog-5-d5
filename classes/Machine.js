import { TechnicalIssue } from './TechnicalIssue.js';

export class Machine {
    constructor() {
        this.menu = {
            cafe: { price: 1000, stock: 3 },
            the: { price: 800, stock: 2 },
            chocolat: { price: 1200, stock: 0 }
        };
    }

    displayMenu() {
        console.log("Menu disponible :");
        for (const [drink, { price, stock }] of Object.entries(this.menu)) {
            console.log(`- ${drink} : ${price} Ar (stock : ${stock})`);
        }
    }

    showMessage(message) {
        console.log(`${message}`);
    }

    isPaymentValid(drink, amount) {
        return amount >= this.menu[drink]?.price;
    }

    isDrinkAvailable(drink) {
        return this.menu[drink]?.stock > 0;
    }

    prepareDrink(drink) {
        if (Math.random() < 0.1) {
            throw new TechnicalIssue();
        }

        this.menu[drink].stock -= 1;
        console.log(`Préparation du ${drink}...`);
    }

    refund(amount) {
        console.log(`Remboursement de ${amount} Ar.`);
    }

    isDrinkCollected() {
        return Math.random() < 0.95;
    }

    notifyMaintenance() {
        console.log("Boisson non récupérée. Maintenance notifiée.");
    }
}
