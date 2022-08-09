import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  proyecto:Proyecto= new Proyecto("","","", "");
  isFail = false;
  errorMsg:string='';

  constructor(
    private proyectoService:ProyectoService,
    private activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.isFail = false;
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.get(id).subscribe(
      data=>{
        this.proyecto=data;
      },
      err=>{
        console.log(err);
        this.errorMsg=err.error.mensaje;
      }
    )
  }
  onUpdate():void{
    this.isFail = false;
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.edit(id, this.proyecto).subscribe(
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
