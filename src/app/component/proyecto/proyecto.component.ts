import { Component, OnInit } from '@angular/core';
import { Proyecto } from './../../models/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from './../../service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectoList:Proyecto[] = [];
  roles: string[]=[];
  isAdmin = false;
  isFail=false;
  errorMsg='';
  constructor(
    private proyectoService:ProyectoService,
    private tokenService:TokenService
    ) { }

  ngOnInit(): void {
    this.cargarProyecto();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol =>{
      if(rol==='ROLE_ADMIN'){
        this.isAdmin=true;
      }
    });
  }
  cargarProyecto():void{
    this.proyectoService.list().subscribe(
      data=>{
        this.isFail=false
        this.proyectoList=data;
      },
      err=>{
        this.isFail=true;
        this.errorMsg=err.error.mensaje;
      }
    );
  }
  borrarProyecto(nombre:string, id:number){
    if(confirm('Confirma que desea eliminar '+ nombre+'?')){
      this.proyectoService.delete(id).subscribe(
        data=>{
          this.cargarProyecto();
        },
        err =>{
          this.errorMsg=err.error.mensaje;
          this.cargarProyecto();
        }
      );
    }
  }
}
