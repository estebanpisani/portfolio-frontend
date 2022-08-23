import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { PersonaService } from './../../../service/persona.service';
import { Persona } from './../../../models/persona';

@Component({
  selector: 'app-editar-about',
  templateUrl: './editar-about.component.html',
  styleUrls: ['./editar-about.component.css']
})
export class EditarAboutComponent implements OnInit {
  isFail = false;
  errorMsg:string = '';
  aboutEdit = false;
  dataEdit = false;
  linksEdit = false;
  isAdmin = false;
  roles: string[] = [];
  persona: Persona = new Persona("", "", "", "", "", "", "", "", "", "", "", "", "");

  constructor(private personaService: PersonaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarPersona();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });

    this.aboutEdit = false;
    this.dataEdit = false;
    this.linksEdit = false;
    this.isFail = false;
  }

    cargarPersona(): void {
    this.aboutEdit = false;
    this.dataEdit = false;
    this.linksEdit = false;
    this.personaService.getPersona().subscribe(
      data => {
        this.persona = data;
      }
    )
  }

  onUpdate(): void {
    this.aboutEdit = false;
    this.dataEdit = false;
    this.linksEdit = false;
    this.isFail = false;
    this.personaService.edit(this.persona.id!, this.persona).subscribe(
      data => {
        this.router.navigate(['/']);
      },
      err => {
        this.isFail = true;
        this.errorMsg = err.error.mensaje;
      }
    )
  }

}
