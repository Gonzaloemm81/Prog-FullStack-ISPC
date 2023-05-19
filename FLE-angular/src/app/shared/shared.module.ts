import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    InicioComponent
  ]
})
export class SharedModule { }
