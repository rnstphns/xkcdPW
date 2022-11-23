import { Component, Input, OnDestroy, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DictService } from './dict.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="password">
    <div *ngIf="this.generatedPass != undefined; else password_display">
              <h2>{{this.generatedPass}}</h2>
            </div>
            <ng-template #password_display class="password">
              <h1>~</h1>
            </ng-template>
      </div>
            <form [formGroup]="form" (ngSubmit)="sendPass()" class="form">
              <div class="input-area">
                <label for="num-words">number of words</label>
                <select formControlName="numWords" name="num-words" id="num-words">
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option selected="true"value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div class="input-area">
                <label for="char-limit">character limit</label>
                <select formControlName="charLimit" name="char-limit" id="char-limit">
                  <option value="-1">none</option>
                  <option value="16">16</option>
                  <option value="20">20</option>
                  <option value="24">24</option>
                  <option value="28">28</option>
                  <option value="32">32</option>
                  <option value="48">48</option>
                  <option value="64">64</option>
                </select>
              </div>
              <div class="input-area">
                <label for="seperator">seperator</label>
                <select formControlName="seperator" name="seperator" id="seperator">
                  <option value="">none</option>
                  <option value=" ">[space]</option>
                  <option value="-">-</option>
                  <option value="_">_</option>
                  <option value=",">,</option>
                  <option value=";">;</option>
                </select>
              </div>
              <div class="input-area">
                <label for="partial-words">allow last word cut-off</label>
                <input type="checkbox" formControlName="partialWords" id="partial-words" [defaultChecked]="false">
              </div>
              <div class="input-area">
                <label for="camel-case">CamelCase</label>
                <input type="checkbox" formControlName="camelCase" id="camel-case" [defaultChecked]="false">
              </div>
              <button class="submit" type="submit">Generate</button>
            </form>
            
            
  `,
  styleUrls: ['../styles.css']
})
export class AppComponent {
  form!: FormGroup;
  generatedPass!: string;

  constructor(private formBuilder: FormBuilder, private dict: DictService) {
    this.form = formBuilder.group({
      'numWords': ['4'],
      'charLimit': ['-1'],
      'seperator': [''],
      'partialWords': [''],
      'camelCase': ['']
    })
  }

  sendPass() {
    const numWords = this.form.value.numWords
    const charLimit = this.form.value.charLimit
    const seperator = this.form.value.seperator
    let partialWords = this.form.value.partialWords
    let camelCase = this.form.value.camelCase
    if(partialWords === "") partialWords = false
    if(camelCase === "") camelCase = false
    const formObj: JSON = JSON.parse(`{"numWords":${numWords},"charLimit":${charLimit},"seperator":"${seperator}","partialWords":"${partialWords}","camelCase":"${camelCase}"}`);
    this.dict.generatePass(formObj)
    .subscribe(Response => {
      const passResp: any = Response
      // console.log(JSON.stringify(Response));
      if(passResp.success) 
        this.generatedPass = passResp.password
      else this.generatedPass = `hmm...the backend didn't like that combo. Try fewer words?`
    }) 
  }

}


