import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
botonn = false;

menu = false

constructor() {};

ngOnInit(): void{};

onClick(){
  if(this.botonn===true){

    this.botonn = false
  } else {
    this.botonn = true
  }
}

onMenu(){
  this.menu ? this.menu = false : this.menu = true
}



}
