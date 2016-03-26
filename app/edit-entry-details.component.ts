import {Component} from 'angular2/core';
import {Entry} from './entry.model';

@Component({
  selector: 'edit-entry-details',
  inputs: ['entry'],
  template: `
    <form class="form-inline text-center">
      <div class="form-group">
        <input [(ngModel)]="entry.item" class="form-control">
      </div>
      <div class="form-group center-field">
        <input [(ngModel)]="entry.calories" class="form-control" type="number">
      </div>
      <div class="form-group">
        <input [(ngModel)]="entry.protein" class="form-control" type="number">
      </div>
    </form>
  `
})
export class EditEntryDetailsComponent {
  public entry: Entry;
}
