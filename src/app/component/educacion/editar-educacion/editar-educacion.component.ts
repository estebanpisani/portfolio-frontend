import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionService } from 'src/app/service/educacion.service';
import { Educacion } from './../../../models/educacion';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  educacion:Educacion=new Educacion("","","","","","");
  isFail = false;
  errorMsg:string='';

  constructor(private educacionService: EducacionService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.isFail = false;
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.get(id).subscribe(
      data=>{
        this.educacion = data;
      },
      err =>{
        this.isFail=true;
        this.errorMsg=err.error.mensaje;
        this.router.navigate(['/']);
      }
    )
  }

  onUpdate(): void {
    this.isFail = false;
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.edit(id, this.educacion).subscribe(
      data=>{
        this.router.navigate(['/']);
      },
      err=>{
        this.isFail=true;
        this.errorMsg=err.error.mensaje;
      }
    )   
  }

}
