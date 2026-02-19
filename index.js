import { adatLista } from "./adat.js";
import { eredmenySzamolas, szamokKiirasa } from "./fuggvenyek.js";
import { szamGeneralas } from "./fuggvenyek.js";
import { tablazatMegjelenit } from "./fuggvenyek.js";

let gombElem = document.getElementById("gomb");
let inputElem = document.getElementById("ertekeles");
let eredmenyElem = document.getElementById("eredmeny");
let asideElem = document.getElementById("szamok");
let articleElem = document.getElementById("tablazat");

gombElem.addEventListener("click", kiir);//függvény referecia

export function kiir(){
    eredmenySzamolas(inputElem, eredmenyElem);
}

let szamok = szamGeneralas();
console.log(szamok);
szamokKiirasa(szamok, asideElem);
tablazatMegjelenit(adatLista, articleElem);
