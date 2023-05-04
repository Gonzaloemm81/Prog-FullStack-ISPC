import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [{
    component: RegistroComponent,
     path: 'registro'
},
{
    component: IniciosesionComponent,
    path: 'iniciosesion'
  },
  {
    component: ServiciosComponent,
    path: 'servicios'
  }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }