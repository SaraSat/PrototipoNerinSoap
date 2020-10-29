import { Component, OnInit } from '@angular/core';
import {Producto} from '../productos/producto';
import {ProductoService} from '../productos/producto.service';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class GestorComponent implements OnInit {

  productos:Producto[];
  producto: Producto = new Producto();

  cols: any[];
  selectedProducts: Producto[];

  productDialog:boolean = false;
  submitted:boolean;

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {

    this.productoService.getProductos().subscribe(request=>{
      request.forEach(element => {
        if(element.destacable == true){
            element.fav = "Si";
        }else{
          element.fav = "No"
        }
        
      });
      this.productos=request as Producto[];
    });

    this.cols=[
      {field:'id', header:'Id',},
      {field:'fav', header:'Favorito'},
      {field:'name', header:'Nombre'},
      {field:'category', header:'Categoría'},
      {field:'price', header:'Precio'},

    ]
  }

  openNew() {
    this.producto = Object.assign({});
    this.submitted = false;
    this.productDialog = true;

  }



}
