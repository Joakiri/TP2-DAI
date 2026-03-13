
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

import { saludar } from './saludo.js';
const mensajeSaludo = saludar('Fifquin');
console.log(mensajeSaludo);
