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
  getDisciplines(): Observable<Discipline[]>{
    return this.httpClient.get<Discipline[]>(`${this.BASE_URl}`)
  }

  updateDiscipline(uni: Discipline){
    return this.httpClient.put<Discipline>(this.BASE_URl, uni)
  }

  deleteDiscipline(uniId: number){
    return this.httpClient.delete<any>(`${this.BASE_URl}/${uniId}`);
  }
  ngOnInit(): void {
  }
}
