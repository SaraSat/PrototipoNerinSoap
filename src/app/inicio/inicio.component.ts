import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  items = [
    {
      nombre : "jabon1.jpg"
    },
    {
      nombre : "jabon2.jpg"
    },
    {
      nombre : "jabon3.jpg"
    },
    {
      nombre : "jabon4.jpg"
    },
    {
      nombre : "jabon5.jpg"
    },
    {
      nombre : "jabon6.jpg"
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
