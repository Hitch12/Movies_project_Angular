import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getTrending(media_type:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${media_type}/day?api_key=038a4c34fec18a29cd459248690420fc`)
  }
  getItemDetails(media_type:string, id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=038a4c34fec18a29cd459248690420fc&language=en-US`)
  }
  getItemSimilar(media_type:string, id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${media_type}/${id}/similar?api_key=038a4c34fec18a29cd459248690420fc&language=en-US`)
  }
  getPageItems(media_type:string, numOfPage:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${media_type}/top_rated?api_key=038a4c34fec18a29cd459248690420fc&language=en-US&page=${numOfPage}`)
  }
  getPageItemsPopular(media_type:string, numOfPage:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${media_type}/popular?api_key=038a4c34fec18a29cd459248690420fc&language=en-US&page=${numOfPage}`)
  }

  //https://api.themoviedb.org/3/${media_type}/${id}/lists?api_key=038a4c34fec18a29cd459248690420fc&language=en-US&page=${numOfPage}
  //https://api.themoviedb.org/3/${media_type}/popular?api_key=038a4c34fec18a29cd459248690420fc&language=en-US&page=${numOfPage}

}
