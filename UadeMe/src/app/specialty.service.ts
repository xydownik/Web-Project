import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Discipline, Specialty, University} from "./models";
import {DisciplineService} from "./discipline.service";

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {
  BASE_URl = "http://127.0.0.1:8000/api/specialties/"
  constructor(private httpClient: HttpClient) {

  }

  getSpecialties(): Observable<Specialty[]>{
    return this.httpClient.get<Specialty[]>(`${this.BASE_URl}`)
  }



}
