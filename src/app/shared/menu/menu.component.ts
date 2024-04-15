import { Component } from '@angular/core';
import { MenuItem } from '../../models/interfaces/MenuItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {


    MenuItems : MenuItem[] =[
      {title:'Home',router:''},
      {title:'Top Movies', router:'topMovies'},
      {title:'Movies', router:'peliculas'}
    ]

}
