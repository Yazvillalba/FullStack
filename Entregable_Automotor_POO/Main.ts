import { Auto } from "./Auto";
import { Camion } from "./Camion";
import { Moto } from "./Moto";
import {RegistroAutomotor} from "./RegistroAutomotor";

let autos = new Array<Auto>();
let motos = new Array<Moto>();
let camiones = new Array<Camion>();

const auto = new Auto ("Rojo", "Fiat", "2005", "EWH065");
const auto1 = new Auto ("Gris", "Fiat", "97", "BGF275");
const auto2 = new Auto ("Gris", "Peugeot", "2005", "BGW322");

const moto = new Moto("acd213", "Rojo", "Mondial", "2023");
const moto1 = new Moto("hye231", "Rojo", "Motomel", "2010");

const camion = new Camion("abg444", "gris", "scania", "2010");
const camion2 = new Camion("abc212", "blanco", "mercedes", "2023")

autos.push(auto)
autos.push(auto1)
autos.push(auto2)

motos.push(moto)
motos.push(moto1)

camiones.push(camion)
camiones.push(camion2);

const registroAutomotor = new RegistroAutomotor(autos,motos,camiones);

console.log(registroAutomotor.getAutos())
console.log(registroAutomotor.getMotos())
console.log(registroAutomotor.getCamiones())

const auto1repeat = new Auto ("Rojo", "Fiat", "2005", "EWH065");

registroAutomotor.addAuto(auto1repeat);

console.log(registroAutomotor.getAutos())

const motoRepeat = new Moto("acd213", "Rojo", "Mondial", "2023");
registroAutomotor.addMoto(motoRepeat);

console.log(registroAutomotor.getMotos())

const camionRepeat = new Camion("abg444", "gris", "scania", "2010");
registroAutomotor.addCamion(camionRepeat);

console.log(registroAutomotor.getCamiones())
