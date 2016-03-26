import {Component, EventEmitter} from 'angular2/core';
import {Entry} from './entry.model';

@Component({
  selector: 'edit-entry-details',
  inputs: ['entry'],
  outputs: ['onSubmitDeleteEntry'],
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
      <button (click)="deleteEntry(entry)" class="btn btn-primary">Delete</button>
    </form>
  `
})
export class EditEntryDetailsComponent {
  public entry: Entry;
  public onSubmitDeleteEntry: EventEmitter<Entry>;
  constructor(){
    this.onSubmitDeleteEntry = new EventEmitter();
  }
  deleteEntry(entry: Entry){
    this.onSubmitDeleteEntry.emit(entry);
  }
}
