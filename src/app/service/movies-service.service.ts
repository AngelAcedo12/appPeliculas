import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DtoResultNowPlaying } from '../models/interfaces/DtoResultNowPlaying';
import header from '../utils/Headers';
import enviroments from '../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})

export class MoviesServiceService {

  constructor(private Http : HttpClient) {
    
   }

   getNowPlayingMovies(page: number):Observable<DtoResultNowPlaying>{
      return this.Http.get<DtoResultNowPlaying>(`${enviroments.BASE_URL}3/movie/now_playing?language=es&page=${page}&api_key=${enviroments.API_KEY}`,{
        headers:header.headers
      })
   }

}
