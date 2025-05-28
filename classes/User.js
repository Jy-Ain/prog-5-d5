import readlineSync from "readline-sync";

export class User {
  selectDrink() {
    const drink = readlineSync.question(
      "Choisissez une boisson (cafe / the / chocolat) : ",
    );
    return drink?.toLowerCase();
  }

  insertPayment() {
    const input = readlineSync.question("Insérez le montant (en Ar) : ");
    const amount = parseFloat(input);
    return isNaN(amount) ? 0 : amount;
  }

  collectDrink() {
    console.log("Vous avez récupéré votre boisson.");
  }
}
