import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Producto} from './producto';



@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url:string = 'http://localhost:8000/api/productos/'

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url);
  }


}
