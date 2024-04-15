import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gen } from '../models/interfaces/Genred';
import { Observable } from 'rxjs';
import enviroments from '../enviroments/enviroments';
import header from '../utils/Headers';

@Injectable({
  providedIn: 'root'
})
export class GenresServiceService {

  constructor(private http:HttpClient) {

    
   }

   getAllGered(): Observable<Gen[]>{
    return this.http.get<Gen[]>(`${enviroments.BASE_URL}genre/movie/list?language=es`,{
      headers:header.headers
    })
   }
}
