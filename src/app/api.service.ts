import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {School} from "./School";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getToken(): Observable<string> {
    return this.http.get<string>('http://127.0.0.1:8000/token');
  }

  getSchools() {
    return this.http.get<Array<School>>('http://127.0.0.1:8000/get-schools');
  }

  getSchool(id: number): Observable<School> {
    return this.http.get<School>(`http://127.0.0.1:8000/get-school/${id}`);
  }

  updateSchool(id: number, school: School) {
    return this.http.post<any>(`http://127.0.0.1:8000/update-school/${id}`, school)
  }

  createSchool(school: School) {
    return this.http.post<any>('http://127.0.0.1:8000/create-school', school);
  }

  deleteSchool(id: number) {
    return this.http.delete(`http://127.0.0.1:8000/delete-school/${id}`);
  }
}
