import {Component} from 'angular2/core';
import {Entry} from './entry.model';

@Component({
  selector: 'edit-entry-details',
  inputs: ['entry'],
  template: `
    <div class="entry-form">
      <h3>Edit Description: </h3>
      <input [(ngModel)]="entry.description" class="col-sm-8 input-lg entry-form"/>
    </div>
  `
})
export class EditEntryDetailsComponent {
  public entry: Entry;
}
