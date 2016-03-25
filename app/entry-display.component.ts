import { Component } from 'angular2/core';
import { Entry } from './entry.model';

//////////////     entry-display < entry-list < root      /////////////////////
@Component({
  selector: 'entry-display',
  inputs: ['entry'],
  template: `
    <div>
      <span>{{ entry.description }}</span>
      <span>{{ entry.calories }}</span>
      <span>{{ entry.protein }}</span>
    </div>
  `
})

export class EntryDisplayComponent {
  public entry: Entry;
}
