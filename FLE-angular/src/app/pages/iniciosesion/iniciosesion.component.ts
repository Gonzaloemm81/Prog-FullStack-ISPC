import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})

export class IniciosesionComponent implements OnInit{
  iniciosesionForm: FormGroup
  constructor(private formBuilder: FormBuilder){
  this.iniciosesionForm = this.formBuilder.group({
    user:['',[Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('^[a-zA-Z0-9]*$')]],  
    password:['',[Validators.required, Validators.minLength(8)]],
    mail:['',[Validators.required, Validators.email]]
})};

get User()
{
  return this.iniciosesionForm.get('user');
}
get Password()
{
  return this.iniciosesionForm.get('password');
}
get Mail()
  {
    return this.iniciosesionForm.get('mail');
  }
onEnviar(event: Event)
{
  event.preventDefault();
  if (this.iniciosesionForm.valid)
  {
    alert('Enviando al servidor pa...')
    this.iniciosesionForm.reset()
  }
  else{
    this.iniciosesionForm.markAllAsTouched();
  }


}
ngOnInit(): void {}

}