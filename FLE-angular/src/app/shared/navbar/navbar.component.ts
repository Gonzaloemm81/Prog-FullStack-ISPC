import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit { 

  menu = false
  
  constructor() {};
  
  ngOnInit(): void{};
  
  onMenu(){
    this.menu ? this.menu = false : this.menu = true
  }
  
  
  
  }