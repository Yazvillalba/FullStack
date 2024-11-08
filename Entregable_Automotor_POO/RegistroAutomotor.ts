import { Auto } from "./Auto";
import { Camion } from "./Camion";
import { Moto } from "./Moto";

export class RegistroAutomotor{
    private autos: Auto[];
    private motos: Moto[];
    private camiones: Camion[];
    
    constructor(autos: Auto[], motos: Moto[], camiones: Camion[]){
        this.autos = autos;
        this.camiones = camiones;
        this.motos = motos;
    }
    public getAutos(): Auto[]{
        return this.autos;
    }
    public getMotos(): Moto[]{
        return this.motos;
    }
    public getCamiones(): Camion[]{
        return this.camiones;
    }

    public addAuto(auto: Auto):void{
        if(this.autos.some((auto)=>
            auto.getPatente() === auto.getPatente()
        )){
            console.log("Auto ya existente en el Registro Del Automotor")
        }else{
            this.autos.push(auto);
            console.log("Auto añadido con exito");
        }
    }

    public addMoto(moto: Moto): void{
        if(this.motos.some((moto)=>
            moto.getPatente() === moto.getPatente()
        )){
            console.log("Moto ya existente en el Registro del Automotor");
        }else{
            this.motos.push(moto);
            console.log("Moto Añadida con exito");
        }
    }

    public addCamion(camion: Camion): void{
        if(this.camiones.some((camion) =>
            camion.getPatente() === camion.getPatente()
        )){
            console.log("Camion ya existente en el Registro del Automotor");
        } else{
            this.camiones.push(camion);
            console.log("Camion Añadido con exito");

        }
    }
}