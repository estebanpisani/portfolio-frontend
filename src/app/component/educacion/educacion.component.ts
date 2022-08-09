import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/service/educacion.service';
import { Educacion } from './../../models/educacion';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionList:Educacion[] = [];
  roles: string[]=[];
  isAdmin = false;
  isFail=false;
  errorMsg='';

  constructor(
    private educacionService:EducacionService,
    private tokenService:TokenService
    ) { }

  ngOnInit(): void {
    this.cargarEducacion();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol =>{
      if(rol==='ROLE_ADMIN'){
        this.isAdmin=true;
      }
    });
  }

  cargarEducacion():void{
    this.educacionService.list().subscribe(
      data=>{
        this.educacionList = data;
      },
      err=>{
        this.isFail=true;
        this.errorMsg=err.error.mensaje;
        console.log(err);
      }
    );
  }

  borrarEducacion(curso:string, id:number){
    if (confirm('Confirma que desea eliminar sus estudios en '+ curso+'?')) {
      this.educacionService.delete(id).subscribe(
        data=>{
          this.cargarEducacion();
        },
        err =>{
          console.log(err);
          this.errorMsg=err.error.mensaje;
          this.cargarEducacion();
        }
      )
    }
  }

}
