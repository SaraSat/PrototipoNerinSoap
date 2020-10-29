import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ResponsiveModule } from 'ngx-responsive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import {AccordionModule} from 'primeng/accordion';   
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {TabViewModule} from 'primeng/tabview';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductosComponent } from './productos/productos.component';


import {ProductoService} from './productos/producto.service';
import { HttpClientModule } from '@angular/common/http';
import { GestorComponent } from './gestor/gestor.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    InicioComponent,
    ContactoComponent,
    ProductosComponent,
    GestorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    AccordionModule,
    ButtonModule,
    ToastModule,
    TabViewModule,
    ResponsiveModule.forRoot(),
    DataViewModule,
    DropdownModule,
    TableModule,
    ToolbarModule
  
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
