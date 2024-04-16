import { Injectable } from '@angular/core';
import {Test} from "./test";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private baseURL: string = 'http://127.0.0.1:8000/api/tests/'

  constructor(private http: HttpClient) { }

  getTestByType(testType: string): Observable<Test> {
    return this.http.get<Test>(`${(this.baseURL)}${testType}/`);
  }

}
