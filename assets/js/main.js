// Lev1_1_1

let address = ["Hauptstraße", 97534, "Waigolshausen", "Bayern"];
let besteFreunde = ["Wer braucht schon Freunde?", "Family forever"];
let person = ["Michaela", "Werthmann", "Micha", 34, "Selbstversorgung", "Schweinfurt", "Fullstack Vollzeit"];

console.log(address, besteFreunde, person);

person.push(address, besteFreunde);
console.log(person);
console.log(person.slice(0, 7));
console.log(person[7]);
console.log(person[8]);

// Lev1_1_2

console.log("This is the array length if 'address':" + address.length);
console.log("This is the array length if 'besteFreunde':" + besteFreunde.length);
console.log("This is the array length if 'person':" + person.length);

// Lev1_2

let meineTrainer1 = ["Steffen", "Max", "Kimberley", "Simon"];
console.log(meineTrainer1);

let meineTrainer2 = new Array("Max", "Steffen", "Simon", "Ahmed");
console.log(meineTrainer2);

let meineTrainer3 = new Array();
meineTrainer3[0] = "Eric";
meineTrainer3[1] = "Steffen";
meineTrainer3[2] = "Simon";
meineTrainer3[3] = "Ahmed";

console.log(meineTrainer3);

// Lev1_3

let numberArray = [5, 6, 7, 8, 9, 10];
console.log(numberArray);
console.log(numberArray[4]);
console.log(numberArray[0]);
console.log(numberArray[5]);

// Lev1_4

let meinText1 = "Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag."
let meinText2 = "Wie geht es dir heute?"
let meinText3 = "Heute ist ein großer Tag für uns."

let split1 = meinText1.split();
let split2 = meinText1.split("");
let split3 = meinText1.split(" ");

console.log(split1);
console.log(split2);
console.log(split3);

let split4 = meinText2.split(' ');
let split5 = meinText3.split();

console.log(split4);
console.log(split5);

// Lev1_5_1

let songs = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"];
let totalSongs = songs.push('Lied1', 'Lied2', 'Lied3');
console.log(totalSongs);
console.log(songs)

let besteFussballerAllerZeiten = ["Fussballspieler1", "Fussballspieler2", "Fussballspieler3", "Fussballspieler4", "Fussballspieler5"];

besteFussballerAllerZeiten.push("Fussballspieler6", "Fussballspieler7", "Fussballspieler8");
console.log(besteFussballerAllerZeiten);

songs.push("Lieddoof1", "Lieddoof2", "Lieddoof3");
besteFussballerAllerZeiten.push("Trainer1", "Trainer2");
console.log(songs);
console.log(besteFussballerAllerZeiten);

// Lev1_5_2

let heroUndEnemy = [["Batman", "The Joke"], ["Professor X", "Magneto"], ["Thor", "Loki"]];

heroUndEnemy.push(["Hero1", "Enemy1"], ["Hero2", "Enemy2"], ["Hero3", "Enemy3"]);
console.log(heroUndEnemy);

// Lev1_6

let lieder = ['Bohemian Rhapsody', 'Stairway to Heaven', 'Hotel California', 'Lied1', 'Lied2', 'Lied3', 'Lieddoof1', 'Lieddoof2', 'Lieddoof3'];

let entfernterSong = lieder.pop();
console.log(entfernterSong);
console.log(lieder);

let fussball = ['Fussballspieler1', 'Fussballspieler2', 'Fussballspieler3', 'Fussballspieler4', 'Fussballspieler5', 'Fussballspieler6', 'Fussballspieler7', 'Fussballspieler8', 'Trainer1', 'Trainer2'];
let entfernterFussballer = fussball.pop();
console.log(entfernterFussballer);
console.log(fussball);

// Lev1_7

let deutscheGerichte = ["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"];
deutscheGerichte.unshift("Käsespätzle", "Labskaus", "Gerupfter", "Himmel und Hölle", "Tafelspitz");
console.log(deutscheGerichte);

// Lev1_8

let firstElement = deutscheGerichte.shift();
let secondElement = deutscheGerichte.shift();
let thirdElement = deutscheGerichte.shift();

let nichtGut = [firstElement, secondElement, thirdElement];
console.log(nichtGut);

// Lev1_9

let newArray = [23, 54, 75];
newArray.push(7, 99, 53);
console.log(newArray);
newArray.unshift(32, 66, 15);
console.log(newArray);
newArray.pop();
newArray.pop();
console.log(newArray);
newArray.shift();
newArray.shift();
console.log(newArray);

// Lev1_12

// Die slice() Methode kopiert einen bestimmten Teil eines Arrays und gibt diesen kopierten Teil als neues Array zurück. Es ändert nicht das ursprüngliche Array.
// Syntax: array.slice(0, until);
// Kopiert Elemente aus einem Array.
// Liefert sie als neues Array zurück.
// Ändert nicht das ursprüngliche Array.
// Beginnt das Slicen von .... bis zum angegebenen Index: array.slice (von, bis).
// Slice enthält keinen "until" Index Parameter.
// Kann sowohl für Arrays als auch für Strings verwendet werden.
// Verwende den Code aus dem Kommentarbereich.
// Verwende den Befehl slice(), um die Daten zu kopieren.
// Kopiere die Bilder 007-014 und deklariere sie als Variable copyImg1.
// Gib copyImg1 und array in der Konsole aus.
// Kopiere die Bilder 006-011 und deklariere sie als Variable copyImg2.
// Gib copyImg2 in der Konsole aus.

let array = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];

console.log(array);

let copyImg1 = array.slice(7, 15);
console.log(copyImg1);

let copyImg2 = array.slice(6, 12);
console.log(copyImg2);













