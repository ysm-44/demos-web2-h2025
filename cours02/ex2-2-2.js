/*
Maxime Faucher
29 janvier 2025
Série 2-2
Exercice 2
*/

/* À partir de la liste de type de fruits disponibles ci-dessous, faite un programme qui permet ; 
1. Afficher la liste des fruits disponibles
2. Filtrer la liste de fruits disponibles selon (1) un nombre maximal de caractère dans un nom de fruit (2) une chaîne de caractères étant inclue dans le nom
La liste de fruits originales ne doit jamais être modifiée
3. Trier la liste de fruits disponibles selon (1) le nombre de caractères dans le nom du fruit en ordre croissant (2) en ordre alphabétique inverse
La liste de fruits originales ne doit jamais être modifiée
*/

import promptSync from 'prompt-sync' // À commenter si vous travaillez avec un navigateur
const prompt = promptSync();
//const prompt = require('prompt-sync')();

const fruitsDisponibles = [
    "Abricot", "Airelle", "Amande", "Ananas", "Avocat", "Banane", "Cassis", "Cerise", 
    "Châtaigne", "Citron", "Clémentine", "Coing", "Datte", "Figue fraîche", "Fraise", 
    "Fraise des bois", "Framboise", "Fruit de la passion", "Grenade", "Groseille", 
    "Groseille à maquereau", "Kaki", "Kiwi", "Kumquat", "Litchi", "Mandarine", "Mangue", 
    "Marron", "Melon", "Mirabelle", "Mûre", "Myrtille", "Nectarine", "Noisette", "Noix", 
    "Orange", "Orange sanguine", "Pamplemousse", "Papaye", "Pastèque", "Pêche", "Poire", 
    "Pomme", "Prune", "Quetsche", "Raisin", "Reine-claude", "Tomate", "Tomate charnue", "Tomate Peretti",
];

// VARIABLES / CONSTANTES
const OPTIONS_MENU_PRINCIPAL = ["Afficher la liste", "Filtrer la liste", "Trier la liste", "Quitter"];
const OPTIONS_SOUS_MENU_FILTRER = ["Nombre max de caractères", "Contient une sous-chaîne"];
const OPTIONS_SOUS_MENU_TRIER = ["Par taille du nom (croissant)", "Ordre alphabétique (inverse)"];
let choix = "";


// PROGRAMME PRINCIPAL
// Afficher le menu principal en boucle
do {
    console.log("\nMenu Principal");
    OPTIONS_MENU_PRINCIPAL.forEach( (element, indice) => console.log(`${indice + 1}. ${element}`) );
    choix = prompt("Votre choix : ").trim();
    // Actions du menu principal
    switch(choix) {
        case "1":
            // Option d'affichage
            console.log("Liste des fruits disponibles");
            afficherListe(fruitsDisponibles);
            break;
        case "2":
            // Option de filtre
            console.log("Option 2");
            // Affichage du sous-menu Filtrer
        break;
        case "3":
            // Option de tri
            console.log("Option 3");
            break;
        case "4":
            // Quitter
            break;
        default:
            // Erreur
            console.log("Choix invalide, veuillez recommencer.");
            break;
    }

} while(choix !== "4");

// FONCTIONS EXTERNES
const afficherListe = (_liste=[]) => _liste.forEach((element, index) => console.log(`${index + 1} - ${element}`));
