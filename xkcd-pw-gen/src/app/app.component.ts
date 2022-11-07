import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { DictService } from './dict.service';

@Component({
  selector: 'app-root',
  template: `
            <form [formGroup]="form" (ngSubmit)="generatePass()" class="form">
              <label for="num-words">number of words</label>
              <select formControlName="num-words" name="num-words" id="num-words">
                <option value="3">3</option>
                <option selected="true"value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <label for="char-limit">character limit</label>
              <select formControlName="char-limit" name="char-limit" id="char-limit">
                <option value="-1">none</option>
                <option value="16">16</option>
                <option value="20">20</option>
                <option value="24">24</option>
                <option value="28">28</option>
                <option value="32">32</option>
              </select>
              <label for="seperator">seperator</label>
              <select formControlName="seperator" name="seperator" id="seperator">
                <option value="">none</option>
                <option value=" ">[space]</option>
                <option value="-">-</option>
                <option value="_">_</option>
                <option value=",">,</option>
                <option value=";">;</option>
              </select>
              <label for="partial-words">allow last word cut-off</label>
              <input type="checkbox" formControlName="partial-words" id="partial-words">
              <label for="camel-case">CamelCase</label>
              <input type="checkbox" formControlName="camel-case" id="camel-case">
              <label for="leet">13371FY</label>
              <input type="checkbox" formControlName="leet" id="leet">
              <button (click)="generatePass()" class="submit" type="submit">Generate</button>
            </form>
            <div *ngIf="generatedPass !== undefined; else password_display">
                <p>{{generatedPass}}</p>
            </div>
            <ng-template #password_display>
              <h1>~password will go here~</h1>
            </ng-template>
            
  `,
  styleUrls:['../styles.css']
})
export class AppComponent {
  form!: FormGroup;
  generatedPass: string | undefined;

  constructor(private formBuilder: FormBuilder, private dict: DictService, private activatedRoute: ActivatedRoute){
    this.form = formBuilder.group({
      'num-words':['4'],
      'char-limit':['-1'],
      'seperator':[''],
      'partial-words':[''],
      'camel-case':[''],
      'leet':['']
    })
  }  
  
  generatePass(){
    console.log(this.form.value)
    
  }
  
}
