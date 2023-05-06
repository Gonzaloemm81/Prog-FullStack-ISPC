import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {
  sucursales: any[] = [
    {
      nombre: 'Sucursal 1',
      direccion: 'Calle Principal 123, Buenos Aires, Argentina',
      telefono: '555-1234'
    },
    {
      nombre: 'Sucursal 2',
      direccion: 'Avenida Secundaria 456, Buenos Aires, Argentina',
      telefono: '555-5678'
    },
    {
      nombre: 'Sucursal 3',
      direccion: 'Calle Alternativa 789, Buenos Aires, Argentina',
      telefono: '555-9012'
    },
    {
      nombre: 'Sucursal 4',
      direccion: 'Avenida Central 987, Buenos Aires, Argentina',
      telefono: '555-3456'
    },
    {
      nombre: 'Sucursal 5',
      direccion: 'Calle Principal 654, Buenos Aires, Argentina',
      telefono: '555-7890'
    }
  ];

  searchQuery: string = '';

  get filteredSucursales(): any[] {
    return this.sucursales.filter(sucursal =>
      sucursal.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  direcciones: string[] = this.sucursales.map(sucursal => sucursal.direccion);

  constructor() { }

  ngOnInit(): void {}
