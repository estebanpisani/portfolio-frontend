import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-crear-educacion',
  templateUrl: './crear-educacion.component.html',
  styleUrls: ['./crear-educacion.component.css']
})
export class CrearEducacionComponent implements OnInit {

  nombreInstituto:string='';
	curso:string='';
	descripcion:string='';
	fechaInicio:string='';
	fechaFin:string='';
	websiteURL:string='';
  isFail = false;
  errorMsg:string = '';

  constructor(private educacionService:EducacionService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    this.isFail = false;
    const educacion = new Educacion(this.nombreInstituto, this.curso, this.descripcion, this.fechaInicio, this.fechaFin, this.websiteURL);
    this.educacionService.save(educacion).subscribe(
      data =>{
        this.router.navigate(['/']);
      },
      err => {
        this.isFail=true;
        this.errorMsg=err.error.mensaje;
      }
    );
  }

}
