import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';



@NgModule({
  declarations: [
    RegistroComponent,
    CarruselComponent,
    IniciosesionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegistroComponent,
    CarruselComponent,
    IniciosesionComponent
  ]
})
export class PagesModule { }
