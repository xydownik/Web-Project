import {Injectable, OnInit} from '@angular/core';
import {City, Discipline} from "./models";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  BASE_URl = "http://127.0.0.1:8000/api/cities/"
  static constList: City[] = []



  constructor(private httpClient: HttpClient) {

  }
  getCities(): Observable<City[]>{
    return this.httpClient.get<City[]>(`${this.BASE_URl}`)
  }



}
