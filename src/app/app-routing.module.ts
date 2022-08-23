import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAboutComponent } from './component/about/editar-about/editar-about.component';
import { LoginComponent } from './component/auth/login/login.component';
import { RegistroComponent } from './component/auth/registro/registro.component';
import { CrearEducacionComponent } from './component/educacion/crear-educacion/crear-educacion.component';
import { EditarEducacionComponent } from './component/educacion/editar-educacion/editar-educacion.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { CrearProyectoComponent } from './component/proyecto/crear-proyecto/crear-proyecto.component';
import { EditarProyectoComponent } from './component/proyecto/editar-proyecto/editar-proyecto.component';
import { CrearTrabajoComponent } from './component/trabajo/crear-trabajo/crear-trabajo.component';
import { EditarTrabajoComponent } from './component/trabajo/editar-trabajo/editar-trabajo.component';
import { PersonaGuardService as personaguard } from './service/guards/person-guard.service';
import { EduGuardService as eduguard } from './service/guards/edu-guard.service';
import { ProyGuardService as proyguard } from './service/guards/proy-guard.service';
import { TrabGuardService as trabguard } from './service/guards/trab-guard.service';
const routes: Routes = [
  {path:'', component: PortfolioComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegistroComponent},
  {path:'new-edu', component: CrearEducacionComponent, canActivate: [personaguard], data: {expectedRol: ['admin', 'user']}}, 
  {path:'new-trab', component: CrearTrabajoComponent, canActivate: [trabguard], data: {expectedRol: ['admin', 'user']}}, 
  {path:'new-proy', component: CrearProyectoComponent, canActivate: [proyguard], data: {expectedRol: ['admin', 'user']}}, 
  {path:'edit-person/:id', component: EditarAboutComponent, canActivate: [eduguard], data: {expectedRol: ['admin', 'user']}},
  {path:'edit-edu/:id', component: EditarEducacionComponent, canActivate: [eduguard], data: {expectedRol: ['admin', 'user']}},
  {path:'edit-trab/:id', component: EditarTrabajoComponent, canActivate: [trabguard], data: {expectedRol: ['admin', 'user']}},
  {path:'edit-proy/:id', component: EditarProyectoComponent, canActivate: [proyguard], data: {expectedRol: ['admin', 'user']}},
  {path:'**', redirectTo:'', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
