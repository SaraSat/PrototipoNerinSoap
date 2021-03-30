import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Producto} from './producto';



@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url:string = 'http://localhost/api/productos'

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url);
  }

  getProducto(id:number):Observable<Producto>{
    return this.http.get<Producto>(`${this.url}/${id}`)
  }

  createProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.url, producto, {
      headers: new HttpHeaders().append('enctype','multipart/form-data')
    })

  }

  updateProducto(producto: Producto): Observable<Producto>{
    console.log(producto)
    return this.http.put<Producto>(`${this.url}/${producto.id}`, producto, {
      headers: new HttpHeaders().append('enctype','multipart/form-data')
    })
  }

  delete(id:number):Observable<Producto>{
    return this.http.delete<Producto>(`${this.url}/${id}`)
  }


}
