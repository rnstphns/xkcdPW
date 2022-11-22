import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Injectable } from '@angular/core'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictService {

  url: string = 'http://localhost:3000/'
  
  constructor(private http: HttpClient) { }

  generatePass(form: JSON): Observable<Object> {
    return this.http.post(this.url, form,
      { headers: new HttpHeaders({ "Content-Type": "application/json" }) }
    )
  }
}
  class passResponse {
    success!: string
    password!: string
  }
