import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';

const routes: Routes = [
  {
    path: 'main', loadChildren: () => import('./Pages/main-page/main-page-routing.module').then(m => m.MainPageRoutingModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
