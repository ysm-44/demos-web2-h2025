/*
Auteur  : Maxime Faucher
Date    : 29 janvier 2025
Sujet   : Démos sur les classes JavaScript

Références utiles
    https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes
    https://www.programiz.com/javascript/classes

*/

// Reprenons notre modèle de personne pour en faire une classe.
class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }

    afficherDetails() {
        console.log(`Bonjour, je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans.`);
    }
}

// Créer un objet de la classe


// Appeler la méthode afficherDetails()


// Modifier et afficher le nom avec la notation .


// Modifier l'âge et l'afficher avec la notation []

