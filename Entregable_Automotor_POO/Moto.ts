export class Moto{
    private patente: string;
    private color: string;
    private marca: string;
    private modelo: string;

    constructor(patente: string, color: string, marca: string, modelo: string){
        this.patente = patente;
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
    }
    
    getPatente(): string{
        return this.patente;
    }
    
    setPatente(patente: string): void{
        this.patente = patente;
    }
    
    getColor(): string{
        return this.color;
    }
    
    setColor(color: string): void{
        this.color = color;
    }
    
    getMarca(): string{
        return this.marca;
    }
    
    setMarca(marca: string): void{
        this.marca = marca;
    }
    
    getModelo(): string{
        return this.modelo;
    }
    
    setModelo(modelo: string): void{
        this.modelo = modelo;
    }

}