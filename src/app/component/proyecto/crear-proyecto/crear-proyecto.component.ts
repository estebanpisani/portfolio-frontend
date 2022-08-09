import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent implements OnInit {
  id?:number;
	nombreProyecto:string='';
	descripcion:string='';
	websiteURL:string='';
	repoURL:string='';
  isFail = false;
  errorMsg:string = '';
  
  constructor(private proyectoService:ProyectoService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    this.isFail = false;
    const proyecto = new Proyecto(this.nombreProyecto,this.descripcion,this.websiteURL, this.repoURL);
    this.proyectoService.save(proyecto).subscribe(
      data =>{
        this.router.navigate(['/']);
      },
      err => {
        this.isFail=true;
        this.errorMsg=err.error.mensaje;
        console.log(err);
      }
    );
  }
}
