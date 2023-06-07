import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  form: any;

  constructor(private formBuilder: FormBuilder){
    this.form= this.formBuilder.group(
      {
        nombre_cliente:['',[Validators.required, Validators.maxLength(40), Validators.minLength(3)]],
        correo:['',[Validators.required, Validators.email]],
        producto:['', Validators.required]
      })};

    get Nombre_Cliente(){return this.form.get('nombre_cliente');}
    get Correo_Electronico(){return this.form.get('correo');}
    get Producto(){return this.form.get('producto');}
    onEnviar(event: Event){
      event.preventDefault;
      if (this.form.valid) {
        alert("Enviando al servidor...")}
      else{this.form.markAllAsTouched();}
    }
ngOnInit(): void{}

}
