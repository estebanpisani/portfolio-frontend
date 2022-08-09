export class Proyecto {
    id?:number;
	nombreProyecto:string;
	descripcion?:string;
	websiteURL?:string;

    constructor(nombreProyecto:string, descripcion:string, websiteURL:string){
        this.nombreProyecto=nombreProyecto;
        this.descripcion=descripcion;
        this.websiteURL=websiteURL;
    }
}
