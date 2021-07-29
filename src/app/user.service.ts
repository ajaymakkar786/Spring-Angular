import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ObservedValueOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  navbarVisible:boolean = false;
  private login = "/api/authenticate"
  
  constructor(private http : HttpClient) { 
    if(localStorage.getItem('showNavbar')){
      this.navbarVisible = true;
    }
  }

  showNavbar(){
    if(localStorage.getItem('showNavbar')){
      this.navbarVisible = true;
    }
  }

  public get getToken(): any {
      return localStorage.getItem('token');
  }

  loginUser(req:any):Observable<any>{
    console.log('login req::',req)
    return this.http.post<any>(this.login,req);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    localStorage.removeItem('showNavbar');
    this.navbarVisible = false;
  }

}
