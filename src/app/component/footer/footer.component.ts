import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from './../../service/persona.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  persona: Persona = new Persona('', '', '', '', '', '', '', '', '', '', '', '', '');

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona():void{
    this.personaService.getPersona().subscribe(
      data=>{
        this.persona = data;
      },
      err=>{
        console.log(err);
      }
    )
  }
}
