import { Component, OnInit } from '@angular/core';
import {Producto} from '../productos/producto';
import {ProductoService} from '../productos/producto.service';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class GestorComponent implements OnInit {

  productos:Producto[];
  producto: Producto;

  cols: any[];
  selectedProducts: Producto[];

  productDialog:boolean = false;
  submitted:boolean;

  edit:boolean;

  fotoSeleccionada:File;

  constructor(private productoService: ProductoService, private router:Router) { }

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
    this.producto  = {};

    this.submitted = false;
    this.productDialog = true;
    this.edit = false;

  }

  editProduct(producto: Producto){
    this.producto = producto;
    this.edit = true;
    this.productDialog = true;
  
  }

  seleccionarFoto(event){
    this.fotoSeleccionada = event.target.files[0];
    
  }

  subirFoto(){
    let formData = new FormData()
    formData.append("img", this.fotoSeleccionada)
  }
  
  saveProduct() {
    this.submitted = true

    this.producto.img = this.fotoSeleccionada;

    console.log(this.producto.img)

    if(this.edit){

      if(this.producto.fav == "true"){
        this.producto.fav = "Si"
      }else{
        this.producto.fav = "No"
      }

      console.log(this.producto.name)
      this.productoService.updateProducto(this.producto).subscribe(producto => this.producto = producto);

    }

    else{

      if(this.producto.fav = "true"){
        this.producto.destacable = true
    
      }else{
        this.producto.destacable = false
      }  
  
      this.productoService.createProducto(this.producto).subscribe(request =>{
      this.router.navigate(['/gestor'])
      console.log(request)
    })

    }

    this.productDialog = false
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
}

  findIndexById(id: number){
    this.productoService.getProducto(id).subscribe(producto => this.producto = producto)
  }


}
