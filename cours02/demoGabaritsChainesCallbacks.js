/*
Auteur  : Maxime Faucher
Date    : 29 janvier 2025
Sujet   : Démos sur les gabarits de chaînes et callbacks

Références utiles
    Gabarits de chaînes
    - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Template_literals
    Fonctions fléchées
    - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    Méthodes sur les tableaux avec callbacks
    - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    Boucles for of / for in
    - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for...of
    - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for...in
*/

import promptSync from 'prompt-sync' // À commenter si vous travaillez avec un navigateur
const prompt = promptSync();
//const prompt = require('prompt-sync')();

const noms = ["Étienne", "Maxime", "Shany", "Guylaine", "Dave"];
const nombres = [1, 2, 3, 4, 5];

const saluer = (element, index, tableau) => console.log(
`Salut ${element},
Bienvenue en Web 2!`);
//console.log('Salut ' + element + '\nBienvenue en Web 2!'); // équivalent à la ligne précédente mais sans gabarit

// 1. Callback d'une fonction anonyme (notation classique)
noms.forEach( function(element, index, tableau) {console.log(`Salut ${element}`);} );
console.log("-----------------");

// 2. Callback d'une fonction anonyme (notation fléchée)
noms.forEach( (element) => console.log(`Salut ${element}`) ); // pour les params, si seulement
// un, les () sont optionnelles
console.log("-----------------");

// 3. Callback avec fonction nommée
noms.forEach(saluer);

// MÉTHODES SUR LES TABLEAUX AVEC CALLBACKS
// .map() retourne un nouveau tableau composé des images de la fonction de rappel
const enMajuscules = elm => elm.toUpperCase();
const nomsMujscules = noms.map(enMajuscules );
console.log(nomsMujscules);

const auCarre = (element, indice, tableau) => tableau[indice] = Math.pow(element, 2);
console.log( nombres.map(auCarre) );

// .filter() va retourner un nouveau tableau contenant les éléments qui respectent 
// la condition du filtre. Si aucun élément ne respecte la condition, c'est un tableau 
// vide qui est renvoyé.
// Filtrons les noms du tableau qui ont 5 caractères ou moins
const nomsCourts = noms.filter( element => element.length <= 5 );
console.log(nomsCourts);

// .reduce() : La méthode reduce() applique une fonction qui est un « accumulateur » et 
// qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire 
// à une seule valeur. La fonction de rappel doit retourner l'accumulateur à chaque itération.
// Exemple : on souhaite compter le nombre de noms de moins de 6 lettres
    // Ici, on donne 2 arguments à .reduce()
    //      1. le callback (fonction fléchée anonyme)
    //      2. la valeur initiale de l'accumulateur (ici, variables nbCourts qui vaut 0)
    // Dans le callback, le 1er paramètre est l'accumulateur, le 2e est l'élément du tableau (3e indice, 4e tableau)
let nbCourts = noms.reduce((nbCourts, element) => {
    if(element.length < 6) 
        return nbCourts + 1;
    else
        return nbCourts;
}, 0 );
console.log(`Il y a ${nbCourts} noms de moins de 6 lettre dans la liste noms.`);
// Autre façon de faire (avec une expression ternaire) :
nbCourts = noms.reduce( (nbCourts, element) => ((element.length < 6)? nbCourts+1 : nbCourts), 0);
console.log(`Il y a ${nbCourts} noms de moins de 6 lettre dans la liste noms.`);


/* BOUCLES for of / for in */
const nombres2 = [13, 7, 11, 5, 9];
for(let i in nombres2) console.log(i); // va afficher les indices du tableau
for(let i of nombres2) console.log(i); // va afficher les valeurs du tableau
