import { Component } from '@angular/core';
import { MenuItem } from '../../models/MenuItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {


    MenuItems : MenuItem[] =[
      {title:'Top Movies', router:'topMovies'},
      {title:'Movies', router:'peliculas'}
    ]

}
