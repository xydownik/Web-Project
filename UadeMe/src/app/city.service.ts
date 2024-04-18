import { Injectable } from '@angular/core';
import {City, Discipline} from "./models";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  BASE_URl = "https://jsonplaceholder.typicode.com/posts"
  static constList: City[] = [
    {
      id:1,
      city: 'Almaty'
    },
    {
      id:2,
      city: 'Astana'
    }

  ]

  constructor(private httpClient: HttpClient) { }
  getCity(): Observable<City>{
    return this.httpClient.get<City>(`${this.BASE_URl}`)
  }
}
