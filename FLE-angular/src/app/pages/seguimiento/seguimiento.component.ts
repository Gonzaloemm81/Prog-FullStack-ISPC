import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({ 
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {

  form: any;
  constructor(private formBuilder: FormBuilder){
    this.form= this.formBuilder.group(
      {
        num_seguimiento:['',[Validators.required, Validators.maxLength(40), Validators.minLength(2)]],
      })};

    get Numero_Seguimiento (){return this.form.get('num_seguimiento');}
    onEnviar(event: Event){
      event.preventDefault;
      if (this.form.valid) {alert ("Enviando al servidor...")}
      else{this.form.markAllAsTouched();}
    }
ngOnInit(): void{}
}