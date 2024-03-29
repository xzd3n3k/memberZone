import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {School} from "./School";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  getTest() {
    return this.http.get<any[]>('http://127.0.0.1:8000/');
  }

  getToken(): Observable<string> {
    return this.http.get<string>('http://127.0.0.1:8000/token');
  }

  createSchool(school: School) {
    return this.http.post<any>('http://127.0.0.1:8000/create-school', school);
  }
}
