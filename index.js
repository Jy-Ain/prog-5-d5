import { User } from "./classes/User.js";
import { Machine } from "./classes/Machine.js";

const user = new User();
const machine = new Machine();

function runCoffeeMachine() {
  try {
    machine.displayMenu();

    const selectedDrink = user.selectDrink();
    if (!selectedDrink || !machine.menu[selectedDrink]) {
      machine.showMessage("Sélection invalide.");
      return;
    }

    machine.showMessage("Veuillez insérer le paiement.");
    const payment = user.insertPayment();

    if (!machine.isPaymentValid(selectedDrink, payment)) {
      machine.showMessage("Paiement insuffisant.");
      return;
    }

    if (!machine.isDrinkAvailable(selectedDrink)) {
      machine.showMessage("Boisson indisponible.");
      machine.refund(payment);
      return;
    }

    try {
      machine.prepareDrink(selectedDrink);
    } catch (error) {
      machine.showMessage(error.message);
      machine.refund(payment);
      return;
    }

    machine.showMessage("Veuillez récupérer votre boisson.");
    user.collectDrink();

    if (!machine.isDrinkCollected()) {
      machine.showMessage("Boisson non récupérée.");
      machine.notifyMaintenance();
    }
  } catch (generalError) {
    console.error("Une erreur inattendue est survenue :", generalError.message);
  }
}

runCoffeeMachine();
