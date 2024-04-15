import { Component, Input } from '@angular/core';
import { Movie } from '../../models/interfaces/Movie';
import enviroments from '../../enviroments/enviroments';
import { MovieTypes } from '../../models/interfaces/Enum/MovieTypes';
import { Gen } from '../../models/interfaces/Genred';



@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MoviComponent {
  
  @Input({required:true}) movie : Movie | undefined
  @Input({required:true}) type  : MovieTypes | undefined
  @Input({required:true}) genred : Gen[] | undefined
   image_path = enviroments.IMAGE_PATH
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   console.log(this.genred)
  }

}
