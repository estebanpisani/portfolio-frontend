import { Component, OnInit } from '@angular/core';
import { Trabajo } from './../../models/trabajo';
import { TrabajoService } from 'src/app/service/trabajo.service';
import { TokenService } from './../../service/token.service';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css']
})
export class TrabajoComponent implements OnInit {

  trabajoList:Trabajo[] = [];
  roles:string[]=[];
  isAdmin = false;
  isFail=false;
  errorMsg='';

  constructor(
    private trabajoService:TrabajoService,
    private tokenService:TokenService
    ) { }

  ngOnInit(): void {
    this.cargarTrabajo();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol =>{
      if(rol==='ROLE_ADMIN'){
        this.isAdmin=true;
      }
    });
  }

  cargarTrabajo():void{
    this.trabajoService.list().subscribe(
      data=>{
          this.trabajoList=data;  
      },
      err=>{
        this.isFail=true;
        this.errorMsg=err.error.mensaje;
      }
    );
  }

  borrarTrabajo(puesto:string, id:number){
    if(confirm('Confirma que desea eliminar su experiencia de '+ puesto+'?')){
      this.trabajoService.delete(id).subscribe(
        data=>{
          this.cargarTrabajo();
        },
        err =>{
          this.errorMsg=err.error.mensaje;
          this.cargarTrabajo();
        }
      )
    }
  }

}
