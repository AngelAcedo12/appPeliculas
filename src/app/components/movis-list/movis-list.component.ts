import { Component, Input, signal, Signal } from '@angular/core';
import { Movie } from '../../models/interfaces/Movie';
import { MovieTypes } from '../../models/interfaces/Enum/MovieTypes';
import { Gen } from '../../models/interfaces/Genred';
import { GenresServiceService } from '../../service/genres-service.service';

@Component({
  selector: 'app-movis-list',
  templateUrl: './movis-list.component.html',
  styleUrl: './movis-list.component.css'
})
export class MovisListComponent {


  constructor(private GenerdService : GenresServiceService){

  }

  @Input({required:true}) movies : Movie[] | undefined;
  @Input({required:true}) type : MovieTypes | undefined;
  
  ngOnInit(): void {
   
    
  }

  
  


  
    
  
}
