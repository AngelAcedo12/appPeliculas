import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviComponent } from './movie/movie.component';
import { MovisListComponent } from './movis-list/movis-list.component';
import { LblGenredComponent } from './lbl-genred/lbl-genred.component';



@NgModule({
  declarations: [
    MoviComponent,
    MovisListComponent,
    LblGenredComponent
  ],
  exports:[
    MoviComponent,
    MovisListComponent

  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
