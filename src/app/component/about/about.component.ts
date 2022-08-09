import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  persona: Persona = new Persona("", "", "", "", "", "", "", "", "", "", "", "", "");
  isFail = false;
  errorMsg: string = '';
  aboutEdit = false;
  dataEdit = false;
  linksEdit = false;
  isAdmin = false;
  roles: string[] = [];

  constructor(
    private personaService: PersonaService,
    private router: Router,
    private tokenService: TokenService) { }

  ngOnInit() {
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
      },
      err => {
        console.log(err);
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
        console.log(data);
        this.router.navigate(['/']);
      },
      err => {
        this.isFail = true;
        this.errorMsg = err.error.mensaje;
        console.log(err);
      }
    )
  }

}
