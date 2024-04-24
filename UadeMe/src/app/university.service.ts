import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import {Specialty, University} from "./models";
import {SpecialtyService} from "./specialty.service";
import {CityService} from "./city.service";

@Injectable({
  providedIn: 'root'
})
export class UniversityService{
  BASE_URl = "http://127.0.0.1:8000/api/universities/"
  constructor(private httpClient: HttpClient) { }

  getUniversities(): Observable<University[]>{
    return this.httpClient.get<University[]>(`${this.BASE_URl}`)
  }

  getUniversity(id: number){
    return this.httpClient.get<University>(`${this.BASE_URl}${id}`)

  }

}
