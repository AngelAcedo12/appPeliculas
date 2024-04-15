import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayaoutMainComponent } from './Pages/layaout-main/layaout-main.component';
import { TopPelisComponent } from './Pages/top-pelis/top-pelis.component';
import { PeliculasComponent } from './Pages/peliculas/peliculas.component';
import { PeliculasConcreteComponent } from './Pages/peliculas-concrete/peliculas-concrete.component';

@NgModule({
  declarations: [
    AppComponent,
    LayaoutMainComponent,
    TopPelisComponent,
    PeliculasComponent,
    PeliculasConcreteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
