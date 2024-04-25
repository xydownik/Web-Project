import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Token} from "./token";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  BASE_URL = 'http://localhost:8000/api';
  private logged: boolean = false;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<Token> {
    return this.http.post<Token>(
      `${this.BASE_URL}/login/`,
      {username, password}
    )
  }

  register(email:string, username: string, password: string) {
      return this.http.post<any>(
        `${this.BASE_URL}/register/`,
        {email, username, password}
      )
  }

  getLoggedStatus() : boolean {
    return this.logged
  }

  setLoggedStatus(status: boolean) : void {
    this.logged = status
  }




}
