import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Consultant} from "./models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsultService {
  BASE_URL = "http://127.0.0.1:8000/api/consultants/"
  constructor(private httpClient: HttpClient) { }

  static constList: Consultant[] = [
    {
      id: 1,
      name: "Билялова Мадина Талгатовна",
      profession: "профориентолог",
      phone: "+77017443517",
      telegram: "",
      whatsApp: "+77017443517",
      insta: "@Bilyalova.coach",
      mail: "Bilyalova.coach@gmail.com ",
      photo: '/assets/images/consultant.png',
      rating: 4.5
    },
    {
      id: 2,
      name: "Билялова Мадина Талгатовна",
      profession: "профориентолог",
      phone: "+77017443517",
      telegram: "",
      whatsApp: "+77017443517",
      insta: "@Bilyalova.coach",
      mail: "Bilyalova.coach@gmail.com ",
      photo: '/assets/images/consultant.png',
      rating: 5
    },
    {
      id :3,
      name: "Билялова Мадина Талгатовна",
      profession: "профориентолог",
      phone: "+77017443517",
      telegram: "",
      whatsApp: "+77017443517",
      insta :"@Bilyalova.coach",
      mail: "Bilyalova.coach@gmail.com ",
      photo: "/assets/images/consultant.png",
      rating: 3.5
    },
    {
      id :4,
      name: "Билялова Мадина Талгатовна",
      profession: "профориентолог",
      phone: "+77017443517",
      telegram: "",
      whatsApp: "+77017443517",
      insta :"@Bilyalova.coach",
      mail: "Bilyalova.coach@gmail.com ",
      photo: "/assets/images/consultant.png",
      rating: 3.5
    }
  ]

  getConsultants(): Observable<Consultant[]>{
    return this.httpClient.get<Consultant[]>(`${this.BASE_URL}`)
  }
  getConsultant(id: number){
    this.httpClient.get<Consultant>(`${this.BASE_URL}${id}`)
  }
}
