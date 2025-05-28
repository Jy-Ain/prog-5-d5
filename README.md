
# Machine à Café - Application Java

## ReadMe Link of Ricka Princy
[Ricka Princy Readme Link](https://github.com/RickaPrincy/prog-5-d5/blob/main/README.md)

## Description

Ce projet simule le fonctionnement d'une machine à café intelligente. Elle suit une architecture Clean Architecture (ou Hexagonale) pour garantir une séparation claire des responsabilités.

## Fonctionnalités principales

1. L'utilisateur insère de l'argent
2. Il choisit un café
3. Il reçoit le café si toutes les conditions sont remplies

## Objectifs du projet

- Appliquer les principes de Clean Architecture
- Concevoir une application orientée métier (Domain-Driven Design)
- Rendre l’application testable, extensible et facile à maintenir
- Séparer les préoccupations métier, technique, présentation

## Architecture du projet

Clean Architecture (Hexagonale) :

        +-------------------+
        |     Interface     | <- Console, Web, etc.
        +-------------------+
                 ↓
        +-------------------+
        |   Application     | <- Orchestration, UseCases
        +-------------------+
                 ↓
        +-------------------+
        |      Domaine      | <- Règles métier, Entités, Exceptions
        +-------------------+
                 ↑
        +-------------------+
        |  Infrastructure   | <- Persistance, APIs externes, hardware
        +-------------------+

## Structure du projet

machine-a-cafe/
├── domaine/
│   ├── modele/
│   │   ├── Coffee.java
│   │   ├── Machine.java
│   │   └── User.java
│   ├── usecase/
│   │   ├── PayCommand.java
│   │   ├── ChooseCoffeeCommand.java
│   │   └── DeliverCoffeeCommand.java
│   └── exception/
│       ├── NotEnoughMoneyException.java
│       ├── OutOfStockException.java
│       └── UnknownCoffeeException.java
├── application/
│   └── CoffeeMachineService.java
├── infrastructure/
│   └── (optionnel)
└── ui/
    └── console/
        └── CoffeeMachineConsole.java

## Règles métier

- L’utilisateur insère un montant en Ariary
- Il choisit un café parmi ceux disponibles
- Si l’argent est suffisant, le stock disponible, et le choix valide, alors le café est livré.
- Sinon, des exceptions sont levées :
  - NotEnoughMoneyException
  - OutOfStockException
  - UnknownCoffeeException

## Fonctionnalités actuelles

- Paiement
- Sélection de café
- Livraison
- Gestion d'erreurs métier
- Interface Console
- Architecture modulaire

## Comment lancer l’application

### Prérequis

- Java 17+
- IDE (IntelliJ, Eclipse, VSCode)
- Optionnel : Maven ou Gradle

### Compilation et exécution

    javac -d out $(find . -name "*.java")
    java -cp out ui.console.CoffeeMachineConsole

Exemple :

    Veuillez insérer un montant (en Ar) : 1000
    Choisissez un café [Espresso, Lungo, Cappuccino] : Espresso
    Voici votre Espresso ! Merci pour votre achat.

## Tests

Cas de test importants :

- Choisir un café sans payer → NotEnoughMoneyException
- Payer mais stock épuisé → OutOfStockException
- Choix de café inconnu → UnknownCoffeeException
- Paiement correct + stock OK → Café livré
- Répétition d'achats → Solde mis à jour dynamiquement

Exemple JUnit :

    @Test
    void should_throw_not_enough_money_exception() {
        Machine m = new Machine(List.of(new Coffee("Espresso", 800, 5)));
        m.insertMoney(500);
        assertThrows(NotEnoughMoneyException.class, () -> m.chooseCoffee("Espresso"));
    }

## Extensions possibles

- Interface Web (Spring Boot)
- Système de fidélité
- Statistiques des ventes
- Paiement mobile
- Multi-utilisateur

## Outils utilisés

- Java 17+
- JUnit
- Clean Architecture
- (optionnel) Maven, Gradle, Spring Boot

## Sécurité (idées futures)

- Vérification des montants
- Protection contre la fraude
- Accès concurrent sécurisé

## Auteur

Développé par [Ton Nom]

## Licence

Code open-source à but pédagogique. Licence MIT ou Creative Commons.

