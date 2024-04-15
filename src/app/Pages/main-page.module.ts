import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { LayaoutMainComponent } from './layaout-main/layaout-main.component';
import { RouterModule } from '@angular/router';
import { TopPelisComponent } from './top-pelis/top-pelis.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculasConcreteComponent } from './peliculas-concrete/peliculas-concrete.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    LayaoutMainComponent,
    TopPelisComponent,
    PeliculasComponent,
    PeliculasConcreteComponent,
    
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    SharedModule,
    RouterModule
  

  ]
})
export class MainPageModule { }
