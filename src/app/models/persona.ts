export class Persona {
    id?: number;
	nombre: string;
	apellido: string;
	direccion: string;
	email: string;
	descripcion?: string;
	telefono?: string;
    ciudad?:string;
    pais?:string;
	fechaNac: string;
	repoURL?: string;
	linkedInURL?: string;
	websiteURL?: string;
	fotoURL?: string;

    constructor(nombre:string, apellido:string, direccion:string, email:string, descripcion: string,telefono: string, ciudad:string, pais:string, fechaNac: string, repoURL: string, linkedInURL: string, websiteURL: string, fotoURL: string){
        this.nombre=nombre;
        this.apellido=apellido
        this.direccion= direccion;
        this.email=email ;
        this.descripcion=descripcion ;
        this.telefono=telefono;
        this.ciudad=ciudad;
        this.pais=pais;
        this.fechaNac=fechaNac;
        this.repoURL=repoURL;
        this.linkedInURL=linkedInURL;
        this.websiteURL=websiteURL;
        this.fotoURL=fotoURL;
    }
}
