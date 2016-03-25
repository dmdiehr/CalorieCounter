import { Component, EventEmitter } from 'angular2/core';
import { EntryListComponent } from './entry-list.component';
import { Entry } from  './entry.model';



/////////////////         root        ///////////////////////
@Component({
  selector: 'my-app',
  directives: [EntryListComponent],
  template: `
  <div class="container">
    <h1 class='jumbotron text-center'>Calorie Counter</h1>
    <hr>
    <ul class='list-inline'>
      <li class='text-center'>Item</li>
      <li class='text-center'>Calories</li>
      <li class='text-center'>Protein</li>
    </ul>
    <hr>

    <entry-list [entryList]="entries"></entry-list>
  </div>
  `
})

export class AppComponent {
  public entries: Entry[];
}
