import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { HeaderComponent } from './component/header/header.component';
import { MainComponent } from './component/main/main.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EducacionComponent } from './component/educacion/educacion.component';
import { TrabajoComponent } from './component/trabajo/trabajo.component';
import { ProyectoComponent } from './component/proyecto/proyecto.component';
import { EditarEducacionComponent } from './component/educacion/editar-educacion/editar-educacion.component';
import { CrearEducacionComponent } from './component/educacion/crear-educacion/crear-educacion.component';
import { CrearTrabajoComponent } from './component/trabajo/crear-trabajo/crear-trabajo.component';
import { EditarTrabajoComponent } from './component/trabajo/editar-trabajo/editar-trabajo.component';
import { CrearProyectoComponent } from './component/proyecto/crear-proyecto/crear-proyecto.component';
import { EditarProyectoComponent } from './component/proyecto/editar-proyecto/editar-proyecto.component';
import { LoginComponent } from './component/auth/login/login.component';
import { RegistroComponent } from './component/auth/registro/registro.component';
import { eduInterceptorProvider} from './service/interceptors/edu-interceptor.service';
import { proyInterceptorProvider } from './service/interceptors/proy-interceptor.service';
import { trabInterceptorProvider } from './service/interceptors/trab-interceptor.service';
import { AboutComponent } from './component/about/about.component';
import { SkillComponent } from './component/skill/skill.component';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SidebarComponent,
    EducacionComponent,
    TrabajoComponent,
    ProyectoComponent,
    EditarEducacionComponent,
    CrearEducacionComponent,
    CrearTrabajoComponent,
    EditarTrabajoComponent,
    CrearProyectoComponent,
    EditarProyectoComponent,
    LoginComponent,
    RegistroComponent,
    AboutComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [eduInterceptorProvider, proyInterceptorProvider, trabInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
