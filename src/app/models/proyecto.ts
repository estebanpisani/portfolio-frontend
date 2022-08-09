export class Proyecto {
    id?:number;
	nombreProyecto:string;
	descripcion?:string;
	websiteURL?:string;
    repoURL?:string;
    
    constructor(nombreProyecto:string, descripcion:string, websiteURL:string, repoURL:string){
        this.nombreProyecto=nombreProyecto;
        this.descripcion=descripcion;
        this.websiteURL=websiteURL;
        this.repoURL=repoURL;
    }
}
