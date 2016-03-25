import { Component } from 'angular2/core';
import { Entry } from './entry.model';

//////////////     entry-display < entry-list < root      /////////////////////
@Component({
  selector: 'entry-display',
  inputs: ['entry'],
  template: `
    <ul class='list-inline'>
      <li class='text-center'>{{ entry.item }}</li>
      <li class='text-center'>{{ entry.calories }}</li>
      <li class='text-center'>{{ entry.protein }}</li>
    </ul>
    <hr>
  `
})

export class EntryDisplayComponent {
  public entry: Entry;
}
