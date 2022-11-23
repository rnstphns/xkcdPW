import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DictService {

  url: string = environment.backendUrl;
  
  constructor(private http: HttpClient) { }

  generatePass(form: JSON): Observable<Object> {
    // console.log(`recieved req ${JSON.stringify(form)}`)
    return this.http.post(this.url, form,
      { headers: new HttpHeaders({ "Content-Type": "application/json" }) }
    )
  }
}
  class passResponse {
    success!: string
    password!: string
  }
