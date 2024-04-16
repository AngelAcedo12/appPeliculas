import { HttpClient } from '@angular/common/http';
import { computed, Injectable, Signal, signal } from '@angular/core';
import { Gen } from '../models/interfaces/Genred';
import { Observable } from 'rxjs';
import enviroments from '../enviroments/enviroments';
import header from '../utils/Headers';

@Injectable({
  providedIn: 'root'
})
export class GenresServiceService {

  constructor(private http:HttpClient) {
    this.getAll()
    
  }
    public genreds:Signal<Gen[] > = signal([])



    getAll(){
      this.http.get<Gen[]>(`${enviroments.BASE_URL}3/genre/movie/list?language=es&api_key=${enviroments.API_KEY}`,{
        headers:header.headers
      }).subscribe(data => 
        this.genreds=computed( () => data)
      )
     
      
    }

    getAllGered(): Observable<Gen[]>{
    return this.http.get<Gen[]>(`${enviroments.BASE_URL}3/genre/movie/list?language=es&api_key=${enviroments.API_KEY}`,{
      headers:header.headers
    })
   }
}
