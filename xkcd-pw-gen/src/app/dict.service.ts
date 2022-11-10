import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { join } from '@fireflysemantics/join';

@Injectable({
  providedIn: 'root'
})
export class DictService {

  ////////////////////////////////////////////////////
  ///////gotta move all this to an express server/////
  ////////////////////////////////////////////////////
  basePath: string = '../assets/dictionaries/WordNet-3.0/';
  csvUrls: string[] = ['adjectives.csv', 'adverbs.csv', 'nouns.csv', 'verbs.csv']
  adjectives: string[] = [];
  adverbs: string[] = [];
  nouns: string[] = [];
  verbs: string[] = [];

  constructor(private http: HttpClient) {
    const adjpath = join(this.basePath, this.csvUrls[0])
    console.log(adjpath)
    this.http.get(adjpath, { responseType: 'text' })
      .subscribe((file: any) => {
        file.split(/[\r\n]+/).forEach((line: string) => this.adjectives.push(line))
      })
    console.log(`adjectives at 5:${this.adjectives[5]}`)

  }

  generatePass(form: JSON): string {
    console.log(`recieved ${JSON.stringify(form)}`)
    return 'password not generated'
  }


}
