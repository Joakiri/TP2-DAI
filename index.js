
import fs from 'fs';

fs.writeFileSync('archivo.txt', 'Hola,este es un archivop de texto.');
console.log('Archivo creado');

const contentido = fs.readFileSync('archivo.txt', 'utf-8');
console.log('Contenido del archivo:', contentido);

import cowsay from 'cowsay';

const mensaje = cowsay.say({
    text: 'Hola, soy una vaca que habla!',
    e: 'oO',
    T: 'U '
});
console.log(mensaje);

import  saludar  from './ej01.js';
const mensajeSaludo = saludar('Fifquin');
console.log(mensajeSaludo);

import * as matematica from './modules/matematica.js';

const sumar = matematica.suma(5,9);
const restar = matematica.resta(5,9);
const multiplicar = matematica.multi(5,9);
const dividir = matematica.divi(5,9);

console.log(sumar);
console.log(restar);
console.log(multiplicar);
console.log(dividir);
import Alumno from './alumno.js';

const alumno1 = new Alumno("Juan", 12345678);
const alumno2 = new Alumno("Ana", 87654321);

console.log(alumno1);
console.log(alumno2);
import fss from 'fs';
function copiar(origen, destino) {
    const contenido = fss.readFileSync(origen, "utf8");
    fss.writeFileSync(destino, contenido);
}
copiar("./entrada.txt", "./hastaLuegoCabo.txt");

import { parsearUrl } from "./modules/url.js";

let datos = parsearUrl("https://www.ejemplo.com/productos?id=10&cat=ropa");
console.log(datos);
