import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Discipline, University} from "./models";

@Injectable({
  providedIn: 'root'
})
export class DisciplineService {
  BASE_URl = "https://jsonplaceholder.typicode.com/posts"
  static constList: Discipline[] = [
    {
      id:1,
      name: 'mathemitics'
    },
    {
      id:2,
      name: 'ICT'
    },
    {
      id:3,
      name: 'english'
    },
    {
      id:4,
      name: 'geography'
    },

  ]

  constructor(private httpClient: HttpClient) { }
  getDisciplines(): Observable<Discipline[]>{
    return this.httpClient.get<Discipline[]>(`${this.BASE_URl}`)
  }
}
