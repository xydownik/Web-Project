import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestResultService {

  private apiUrl = 'http://127.0.0.1:8000/api/';


  constructor(private http: HttpClient) { }

  saveTestResult(testType: string, testResultData: string[]): Observable<any> {
    const url = `${this.apiUrl}save_test_result/${testType}/`;
    return this.http.post<any>(url, testResultData);
  }

  getTestResult(testType: string): Observable<any> {
    const url = `${this.apiUrl}get_test_result/${testType}/`;
    return this.http.get<any>(url);
  }

}
