import { Component, OnInit } from '@angular/core';
import {Producto} from '../productos/producto';
import {ProductoService} from '../productos/producto.service';

@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css']
})
export class GestorComponent implements OnInit {

  productos:Producto[];
  cols: any[];
  selectedProducts: Producto[];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {

    this.productoService.getProductos().subscribe(request=>{

      this.productos=request as Producto[];
    });



    this.cols=[
      {field:'id', header:'Id',},
      {field:'name', header:'Nombre'},
      {field:'category', header:'Categoría'},
      {field:'price', header:'Precio'},

    ]
  }

}
