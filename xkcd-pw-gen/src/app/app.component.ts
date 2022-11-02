import { Component } from '@angular/core';
import { DictService } from './dict.service';

@Component({
  selector: 'app-root',
  template: `
            <form action="generate">
              <label for="num-words">number of words</label>
              <select name="num-words" id="num-words">
                <option value="3">3</option>
                <option selected="true"value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <label for="char-limit">character limit</label>
              <select name="char-limit" id="char-limit">
                <option value="-1">none</option>
                <option value="16">16</option>
                <option value="20">20</option>
                <option value="24">24</option>
                <option value="28">28</option>
                <option value="32">32</option>
              </select>
              <label for="seperator">seperator</label>
              <select name="seperator" id="seperator">
                <option value="">none</option>
                <option value=" ">[space]</option>
                <option value="-">-</option>
                <option value="_">_</option>
                <option value=",">,</option>
                <option value=";">;</option>
              </select>
              <label for="partial-words">allow last word cut-off</label>
              <input type="checkbox" id="partial-words">
              <label for="camel-case">CamelCase</label>
              <input type="checkbox" id="camel-case">
              <label for="leet">13371FY</label>
            <input type="checkbox" id="leet">
            <button (click)="generatePass()">Generate</button>
            </form>
            <div *ngIf="generatedPass !== undefined; else password_display">
                <p>{{generatedPass}}</p>
            </div>
            <ng-template #password_display>
              <h1>~password will go here~</h1>
            </ng-template>
            
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  generatedPass: string | undefined;

  constructor(private dict: DictService){ }
  
  generatePass(){
    console.log('todo app component: generatePass()')
  }
}
