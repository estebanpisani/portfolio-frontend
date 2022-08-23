import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trabajo } from 'src/app/models/trabajo';
import { TrabajoService } from 'src/app/service/trabajo.service';

@Component({
  selector: 'app-editar-trabajo',
  templateUrl: './editar-trabajo.component.html',
  styleUrls: ['./editar-trabajo.component.css']
})
export class EditarTrabajoComponent implements OnInit {

  trabajo:Trabajo = new Trabajo("", "", "", "", "", "");
  isFail = false;
  errorMsg:string='';

  constructor(
    private trabajoService:TrabajoService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.isFail = false;
    const id = this.activatedRoute.snapshot.params['id'];
    this.trabajoService.get(id).subscribe(
      data=>{
        this.trabajo=data;
      },
      err=>{
        this.errorMsg=err.error.mensaje;
      }
    )
  }
  onUpdate(): void {
    this.isFail = false;
    const id = this.activatedRoute.snapshot.params['id'];
    this.trabajoService.edit(id, this.trabajo).subscribe(
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
