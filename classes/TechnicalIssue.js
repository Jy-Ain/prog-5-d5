export class TechnicalIssue extends Error {
  constructor(message = "Problème technique détecté") {
    super(message);
    this.name = "TechnicalIssue";
  }
}
