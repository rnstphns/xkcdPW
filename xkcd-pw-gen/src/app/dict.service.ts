import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class DictService {

  generatedPass!: string;
  url: string = 'http://localhost:3000/'
  
  constructor(private http: HttpClient) { }

  generatePass(form: JSON): string {
    // console.log(`recieved req ${JSON.stringify(form)}`)
    this.http.post(this.url, form,
      { headers: new HttpHeaders({ "Content-Type": "application/json" }) }
    ).subscribe(Response => {
      // console.log(`raw response: ${JSON.stringify(Response)}`)
      const passResp: any= Response
      if(passResp.success) 
        this.generatedPass = passResp.password
      else this.generatedPass = `something went wrong on the backend...`
    })
    return this.generatedPass
  }
}
  class passResponse {
    success!: string
    password!: string
  }
