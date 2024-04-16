import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayaoutMainComponent } from './Pages/layaout-main/layaout-main.component';
import { TopPelisComponent } from './Pages/top-pelis/top-pelis.component';
import { PeliculasComponent } from './Pages/shearch/shearch.component';
import { PeliculasConcreteComponent } from './Pages/peliculas-concrete/peliculas-concrete.component';
import { MenuComponent } from './shared/menu/menu.component';
import { share } from 'rxjs';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { MoviComponent } from './components/movie/movie.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovisListComponent } from './components/movis-list/movis-list.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    HttpClientModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
