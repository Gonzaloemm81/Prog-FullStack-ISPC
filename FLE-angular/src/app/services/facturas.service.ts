import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  url:String = 'http://localhost:8000/'

  constructor(private http:HttpClient) { }
  
  obtenerFacturas():Observable <any>{
    return this.http.get(this.url + 'api/facturas/');
  }
   agregarFacturas(data:any): Observable<any>{
     return this.http.post(this.url + 'api/facturas/',data);
  }

}
