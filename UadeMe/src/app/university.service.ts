import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Specialty, University} from "./models";
import {SpecialtyService} from "./specialty.service";
import {CityService} from "./city.service";

@Injectable({
  providedIn: 'root'
})
export class UniversityService{
  BASE_URl = "http://127.0.0.1:8000/api/universities/"
  constructor(private httpClient: HttpClient) { }

  static constList: University[] = [
    {
      id: 1,
      name: 'KBTU',
      photo: "/assets/images/KBTU.png",
      specialties: [SpecialtyService.constList[1]],
      phoneNumber: '87010101010',
      cost: 4000000,
      uniType: 'частный',
      location: CityService.constList[0],
      grantScore: 99,
      paidScore: 50,
      address:"Толе би 59"
    },
    {
      id: 1,
      name: 'AlmaU',
      photo: "/assets/images/KBTU.png",
      specialties: SpecialtyService.constList,
      phoneNumber: '87010101010',
      cost: 1000000,
      uniType: 'частный',
      location: CityService.constList[1],
      grantScore: 80,
      paidScore: 50,
      address: "Жамбыл 101"
    },
  ]
  getUniversitiesObs(): Observable<University[]>{
    return this.httpClient.get<University[]>(`${this.BASE_URl}`)
  }
  getUniversities(){
    return UniversityService.constList
  }

  getUniversity(id: number){
    return this.httpClient.get<University>(`${this.BASE_URl}${id}`)
  }

}
