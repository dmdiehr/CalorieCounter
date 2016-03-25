import {Component, EventEmitter} from 'angular2/core';
import {Entry} from './entry.model';

@Component({
  selector: 'new-entry',
  outputs: ['onSubmitNewEntry'],
  template: `
  <div class="entry-form">
    <h3>Create Entry:</h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <button (click)="addEntry(newDescription)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewEntryComponent {
  public onSubmitNewEntry: EventEmitter<String>;
  constructor(){
    this.onSubmitNewEntry = new EventEmitter();
  }
  addEntry(userDescription: HTMLInputElement){
    this.onSubmitNewEntry.emit(userDescription.value);
    userDescription.value="";
  }
}
