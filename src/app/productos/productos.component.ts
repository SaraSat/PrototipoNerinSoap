import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Producto } from './producto';
import { ProductoService } from './producto.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  productos: Producto[];


  constructor(private primengConfig: PrimeNGConfig, private productoService: ProductoService) { }


  ngOnInit(): void {

    this.productoService.getProductos().subscribe(
      response => {
        this.productos = response as Producto[];
      }
    )


    this.sortOptions = [
      {label: 'Precio más alto', value: '!price'},
      {label: 'Precio más bajo', value: 'price'}
    ];

    this.primengConfig.ripple = true;      
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

}
