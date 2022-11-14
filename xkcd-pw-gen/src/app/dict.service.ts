import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictService {

  ////////////////////////////////////////////////////
  ///////gotta move all this to an express server/////
  ////////////////////////////////////////////////////
  

  generatePass(form: JSON): string {
    console.log(`recieved ${JSON.stringify(form)}`)
    return 'password not generated'
  }


}
