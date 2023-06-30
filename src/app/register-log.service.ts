import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterModel} from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterLogService {

  constructor(private http: HttpClient) {
  }

  getRegisters() {
    return this.http.get<RegisterModel[]>('http://localhost:8080/api/v1/log/registers');
  }
}
