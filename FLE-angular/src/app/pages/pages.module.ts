import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ServiciosComponent } from './servicios/servicios.component';



@NgModule({
  declarations: [
    RegistroComponent,
    CarruselComponent,
    ServiciosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegistroComponent,
    CarruselComponent,
    ServiciosComponent
    
  ]
})
export class PagesModule { }
