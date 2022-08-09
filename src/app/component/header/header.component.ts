import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from './../../service/persona.service';
import { TokenService } from './../../service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  persona:Persona= new Persona('','','','','','','','','','','','','');
  isLogged = false;

  constructor(private personaService:PersonaService, private tokenService: TokenService) {}

  ngOnInit(){
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
    this.cargarPersona();
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
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
