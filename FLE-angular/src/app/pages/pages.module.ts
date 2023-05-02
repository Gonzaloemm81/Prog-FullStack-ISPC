import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { CarruselComponent } from './carrusel/carrusel.component';



@NgModule({
  declarations: [
    RegistroComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegistroComponent,
    CarruselComponent
  ]
})
export class PagesModule { }
