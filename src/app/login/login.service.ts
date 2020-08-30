import { Injectable } from '@angular/core';
import { User } from '../model/User.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  HTTP_OPTIONS = {
    headers:  new HttpHeaders({
    'Content-Type':  'application/json'
  })
}

  public isValidUser(user: User){ 

    let res = this.http.post('http://localhost:8483/api/v1/isValidUser',user, this.HTTP_OPTIONS);
    console.log(res);
    return res;
  }
}
