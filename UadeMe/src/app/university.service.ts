import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {University} from "./models";

@Injectable({
  providedIn: 'root'
})
export class UniversityService implements OnInit{
  BASE_URl = "https://jsonplaceholder.typicode.com/posts"
  constructor(private httpClient: HttpClient) { }
  getUniversities(): Observable<University[]>{
    return this.httpClient.get<University[]>(`${this.BASE_URl}`)
  }

  updateUniversity(uni: University){
    return this.httpClient.put<University>(this.BASE_URl, uni)
  }

  deleteAlbum(uniId: number){
    return this.httpClient.delete<any>(`${this.BASE_URl}/${uniId}`);
  }
  ngOnInit(): void {
  }
}
