import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  
})
export class InicioComponent implements OnInit {
  fontSizePx:number = 16;
  message: string = 'Soy un two way data binding';
  mensaje = 'Hola, este es un mensaje';
  bgPropertyValid = true;

  constructor() {}

  ngOnInit(): void {}

  onDiv() {
    this.bgPropertyValid ? (this.bgPropertyValid = false) : (this.bgPropertyValid = true);
  }

  evento() {
    this.mensaje = "Este es el mensaje de la interpolación cambiado por un evento";
  }
}