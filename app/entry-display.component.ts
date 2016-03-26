import { Component } from 'angular2/core';
import { Entry } from './entry.model';

//////////////     entry-display < entry-list < root      /////////////////////
@Component({
  selector: 'entry-display',
  inputs: ['entry'],
  template: `
    <hr>
    <ul class='list-inline text-center'>
      <li class='text-center'>{{ entry.item }}</li>
    </ul>
  `
})

export class EntryDisplayComponent {
  public entry: Entry;
}
