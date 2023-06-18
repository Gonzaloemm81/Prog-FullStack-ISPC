import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsuariosService } from 'src/app/services/usuarios.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
    // Formulario de nuevo usuario
    usuarioForm: FormGroup;
    userForm: boolean = false;
  
    usuarios: any; 
  
    constructor(private user: UsuariosService, 
      private formBuilder: FormBuilder,
      private router: Router){


// Validacion del formulario de nuevos usuarios
this.usuarioForm = this.formBuilder.group({
user: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern('^[a-zA-Z0-9]*$')]],
email: ['',[Validators.required, Validators.email]] ,
password: ['',[Validators.required,Validators.minLength(8)]],
is_staff: ['',[Validators.required]],
})


}

get User(){
  return this.usuarioForm.get('user');
}
get Email(){
  return this.usuarioForm.get('email');
}
get Password(){
  return this.usuarioForm.get('password');
}

abrirForm(){
  this.userForm = !this.userForm
}





ngOnInit(): void {}


agregarUsuario() {
  if (this.usuarioForm.invalid) {
    this.usuarioForm.markAllAsTouched(); // Clear
    return;
  }

  const nuevoUsuario = {
    username: this.usuarioForm.value.user,
    email: this.usuarioForm.value.email,
    password: this.usuarioForm.value.password,
    is_staff: this.usuarioForm.value.is_staff // Cambia esto según la selección del usuario en el formulario
  };

  this.user.agregarUsuarios(nuevoUsuario).subscribe(
    response => {
      // Manejar la respuesta exitosa
      console.log(response);
      alert("¡Usuario creado con éxito!")
      this.usuarioForm.reset();
      this.router.navigate(['/iniciosesion'])
      

    },
    error => {
      // Manejar el error
      console.error(error);
    }
  );
}}
