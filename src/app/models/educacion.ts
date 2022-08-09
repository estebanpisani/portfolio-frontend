export class Educacion {
    id?:number;
	nombreInstituto:string;
	curso:string;
	descripcion?:string;
	fechaInicio?:string;
	fechaFin?:string;
	websiteURL?:string;

    constructor(nombreInstituto:string, curso:string, descripcion:string, fechaInicio:string, fechaFin:string, websiteURL:string){
        this.nombreInstituto=nombreInstituto;
        this.curso=curso;
        this.descripcion=descripcion;
        this.fechaInicio=fechaInicio;
        this.fechaFin=fechaFin;
        this.websiteURL=websiteURL;
    }
}
