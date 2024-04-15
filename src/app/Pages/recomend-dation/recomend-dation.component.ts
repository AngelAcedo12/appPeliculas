import { Component, computed, inject, OnInit, signal, Signal } from '@angular/core';
import { DtoResultNowPlaying } from '../../models/interfaces/DtoResultNowPlaying';
import { MoviesServiceService } from '../../service/movies-service.service';
import { Movie } from '../../models/interfaces/Movie';
import { MovieTypes } from '../../models/interfaces/Enum/MovieTypes';
import { Gen } from '../../models/interfaces/Genred';
import { GenresServiceService } from '../../service/genres-service.service';

@Component({
  selector: 'app-recomend-dation',
  templateUrl: './recomend-dation.component.html',
  styleUrl: './recomend-dation.component.css'
})
export class RecomendDationComponent implements OnInit {

  private moviesService = inject(MoviesServiceService)
  private genredService = inject(GenresServiceService)


  ngOnInit(): void {
      this.loadNowPlayingMovies(this.page())
  }


  

  nowPlayingMovies : Signal<Movie[]| undefined> =  signal(undefined)
  moviesFound = signal(false)
  page = signal(1)
  movieType = MovieTypes.Recomend
  genreds: Signal<Gen[] | undefined> = signal(undefined)


  getAllGenred(){
    this.genredService.getAllGered().subscribe(data => {
      this.genreds= computed(() => {return data})
    })
  }


  loadNowPlayingMovies(page:number){
    if(page <= 0 ) return;

    this.moviesService.getNowPlayingMovies(this.page()).subscribe( data => {
      this.moviesFound.set(false) 
      if(this.nowPlayingMovies()===undefined) {
        this.nowPlayingMovies= computed(() =>  {return data.results})
       
      }else{
        this.nowPlayingMovies()?.concat(data.results)

      }
      this.moviesFound.set(true)
    }
    )

  

  }


}
