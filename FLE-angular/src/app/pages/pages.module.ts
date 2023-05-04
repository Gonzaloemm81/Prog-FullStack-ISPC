import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';



@NgModule({
  declarations: [
    RegistroComponent,
    CarruselComponent,
    ServiciosComponent,
    IniciosesionComponent,
    SeguimientoComponent,
    CalculadoraComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegistroComponent,
    CarruselComponent,
    ServiciosComponent,
    IniciosesionComponent,
    SeguimientoComponent,
    CalculadoraComponent
  ]
})
export class PagesModule { }
