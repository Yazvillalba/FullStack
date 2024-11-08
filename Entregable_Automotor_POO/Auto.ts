export class Auto{
    private patente: string;
    private color: string;
    private marca: string;
    private modelo: string;

    constructor(color: string, marca: string, modelo: string, patente: string){
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }

    getColor(): string {
        return this.color;
    }
    
    getMarca(): string {
        return this.marca;
    }
    
    getModelo(): string {
        return this.modelo;
    }
    
    getPatente(): string {
        return this.patente;
    }
    
    setColor(color: string): void {
        this.color = color;
    }
    
    setMarca(marca: string): void {
        this.marca = marca;
    }
    setModelo(modelo: string): void {
        this.modelo = modelo;
    }
    setPatente(patente: string): void {
        this.patente = patente;
    }
}