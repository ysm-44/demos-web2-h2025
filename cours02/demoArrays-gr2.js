/*
Auteur  : Maxime Faucher
Date    : 27 janvier 2025
Sujet   : Démos sur les Arrays JS

Références utiles
    Méthodes sur les tableaux : push, pop, shift, unshift, splice, indexOf, find, forEach, sort, reverse
    - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

import promptSync from 'prompt-sync' // À commenter si vous travaillez avec un navigateur
const prompt = promptSync();
//const prompt = require('prompt-sync')();

// Déclaration d'un tableau
const fruits = [];

// Ajout / remplacement d'éléments : via indices, ou avec .push()
// Voir aussi .unshift()
fruits[0] = "pomme";
fruits.push("raisin");
fruits.push("orange", "mangue");
fruits[2] = "fraise";
console.log(fruits);

// Retirer des éléments
// .pop() va enlever et retourner le dernier élément
// .shift() fait comme .pop() mais en début de tableau
let dernier = fruits.pop();
console.log(dernier);
console.log(fruits);
console.log([].pop());
// Méthode .splice()
let fruitsPerdus = fruits.splice(0, 1, "Framboise");
console.log(fruitsPerdus);
console.log(fruits);

// Chercher des éléments
// .indexOf(valeur) va retourner l'indice de valeur si elle se trouve dans le tableau
// va retourner -1 sinon
let indiceFraise = fruits.indexOf("fraise");
if(indiceFraise >= 0) {
    console.log("fraise est à l'indice", indiceFraise);
}
else {
    console.log("aucune fraise dans la liste");
}
let indiceBanane = fruits.indexOf("banane")
if(indiceBanane >= 0) {
    console.log("banane est à l'indice", indiceBanane);
}
else {
    console.log("aucune banane dans la liste");
}
// Méthode .find() va appliquer une fonction sur les éléments et retourne la valeur du premier
// élément pour lequel la fonction retourne vrai
let elmDebuteParF = fruits.find(function(elm) {
    return elm.substring(0, 1) === "f";
});
console.log(elmDebuteParF);

// Méthode .forEach() permet de parcourir tous les éléments
fruits.forEach((elm) => {
    console.log(elm.toUpperCase());
});

// Trier un tableau
// Si tous les éléments sont comparables entre eux (du même type, par exemple)
// alors .sort() va trier les éléments selon l'ordre naturel de ces éléments
fruits.sort();
console.log(fruits);

// .reverse() agit comme .sort() mais en ordre inversé!
console.log(fruits.reverse());