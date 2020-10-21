import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  productos = [
    {
      image : "jabon1.jpg",
      name: "Jabon 1",
      price:10
    },
    {
      image : "jabon2.jpg",
      name: "Jabon 2",
      price:10
    },
    {
      image : "jabon3.jpg",
      name: "Jabon 3",
      price:10
    },
    {
      image : "jabon4.jpg",
      name: "Jabon 4",
      price:10
    },
    {
      image : "jabon5.jpg",
      name: "Jabon 5",
      price:10
    },
    {
      image : "jabon6.jpg",
      name: "Jabon 6",
      price:10
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
