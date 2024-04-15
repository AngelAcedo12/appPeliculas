import { Component, Input } from '@angular/core';
import { Movie } from '../../models/interfaces/Movie';
import { MovieTypes } from '../../models/interfaces/Enum/MovieTypes';
import { Gen } from '../../models/interfaces/Genred';

@Component({
  selector: 'app-movis-list',
  templateUrl: './movis-list.component.html',
  styleUrl: './movis-list.component.css'
})
export class MovisListComponent {

  @Input({required:true}) movies : Movie[] | undefined;
  @Input({required:true}) type : MovieTypes | undefined;
  @Input({required:true}) genred : Gen[] | undefined;

  asignedGen(movie:Movie){
  return this.genred?.filter((value) => {
      return movie.genre_ids.filter(genredMovie => {if(  genredMovie==value.id){
        console.log(value)
      }
     )
    })
    
  }
}
