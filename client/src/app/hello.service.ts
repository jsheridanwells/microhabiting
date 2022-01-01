import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Hello {
  message: string = '';
  constructor(msg: string) {
    this.message = msg;
  }
}

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(
    private http: HttpClient
  ) { }

  getHello(): Observable<Hello> {
    return this.http.get<Hello>('http://localhost:3000/api/hello');
  }
}
