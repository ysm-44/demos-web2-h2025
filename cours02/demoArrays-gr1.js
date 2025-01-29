// Maxime Faucher
// 28 janvier 2025
// Manipulations de tableaux (Arrays) en JS

import ps from 'prompt-sync';
const prompt = ps();

// Déclaration de tableau
const fruits = [];

// Taille
console.log(fruits.length);

// Ajouter des éléments
// Via indiçage
fruits[0] = "fraise";
// Via méthode .push() qui ajoute à la fin
fruits.push("orange");
// Via méthode .unshift() qui ajoute au début
fruits.unshift("bleuet");
afficher(fruits);


// Supprimer / remplacer des éléments
// Avec .splice()
fruits.splice(1, 1, 'framboise', 'banane')
// Ou avec .pop() qui retire et retourne le dernier élément
afficher(fruits.pop());
afficher(fruits);

// Chercher des éléments
// Avec indexOf() qui retourne la position (indice) dans le tableau si trouvé, -1 sinon
let indiceBleuetde0 = fruits.indexOf('bleuet');
let indiceBleuetde1 = fruits.indexOf('bleuet', 1);
console.log(indiceBleuetde0, indiceBleuetde1);
// Similairement, il existe lastIndexOf() 
// Avec .find() qui utilise une fonction pour tester le critère de recherche
// Cherchons un fruit qui commencent par 'b'
let fruitCommenceParB = fruits.findLast(trouverLettreB); // il existe aussi findLast()
let indexPremierFruitB = fruits.findLastIndex(trouverLettreB);
console.log(fruitCommenceParB, indexPremierFruitB);

// Parcourir un tableau
// Boucle "classique"
for (let i=0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// For of (lecture seule)
for (const fruit of fruits) {
    console.log(fruit);
}
// Méthode .forEach()
fruits.forEach(enMajuscules);
afficher(fruits);


// Fonctions de rappel définies à l'externe
// NOTE IMPORTANTE : lorsque nous utiliserons les fonction fléchées, on doit définir
// les fonctions AVANT (plus haut dans le code) de les appeler, car le "hoisting" (hissage) 
// ne fonctionne pas avec les fonctions fléchées.
function enMajuscules(elm, i, arr) {
    arr[i] = elm.toUpperCase();
}

function enMinuscules(elm, i, arr) {
    arr[i] = elm.toLowerCase();
}

function trouverLettreB(element) {
    return element.substring(0, 1).toLowerCase() === 'b';
}

// Fonction pour afficher mon tableau
function afficher(_tableau = []) {
    console.log(_tableau);
}