export class Trabajo {
	id?:number;
	nombreEmpresa:string;
	puesto:string;
	descripcion?:string;
	fechaInicio:string;
	fechaFin:string;
	websiteURL?:string;

    constructor(nombreEmpresa:string, puesto:string, descripcion:string, fechaInicio:string, fechaFin:string, websiteURL:string){
        this.nombreEmpresa=nombreEmpresa;
        this.puesto=puesto;
        this.descripcion=descripcion;
        this.fechaInicio=fechaInicio;
        this.fechaFin=fechaFin;
        this.websiteURL=websiteURL;
    }
}
