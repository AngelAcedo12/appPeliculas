import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { LayaoutMainComponent } from '../layaout-main/layaout-main.component';
import { TopPelisComponent } from '../top-pelis/top-pelis.component';
import { PeliculasComponent } from '../peliculas/peliculas.component';
import { PeliculasConcreteComponent } from '../peliculas-concrete/peliculas-concrete.component';

const routes: Routes = [
  {
    path:'main',
    component:LayaoutMainComponent,
    children:[
      {
        path:'topPelis', component:TopPelisComponent, 
      },
      {
        path:'peliculas',component:PeliculasComponent
      },
      {
        path:'peliculas/:id', component: PeliculasConcreteComponent
      },
      {
        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
