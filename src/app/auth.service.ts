import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient, private _Router:Router) {
    if(localStorage.getItem('userToken') != null){
      this.saveUserData()
    }
  }

  userData:any = new BehaviorSubject(null);

  saveUserData(){
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:object = jwtDecode(encodedToken);
    this.userData.next(decodedToken);
  }

  signup(userData:object):Observable<any>
  {
    return this._HttpClient.post('https://route-movies-api.vercel.app/signup/', userData)
  }

  signin(userData:object):Observable<any>
  {
    return this._HttpClient.post('https://route-movies-api.vercel.app/signin/', userData)
  }

  sigout(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login'])
  }

}
