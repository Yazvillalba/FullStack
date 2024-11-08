export class Camion{
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
    
    public getPatente(): string{
        return this.patente;
    }
    
    public setPatente(patente: string): void{
        this.patente = patente;
    }
    
    public getColor(): string{
        return this.color;
    }
    
    public setColor(color: string): void{
        this.color = color;
    }
    
    public getMarca(): string{
        return this.marca;
    }
    
    public setMarca(marca: string): void{
        this.marca = marca;
    }
    
    public getModelo(): string{
        return this.modelo;
    }
    
    public setModelo(modelo: string): void{
        this.modelo = modelo;
    }
    
}