import {Component, EventEmitter} from 'angular2/core';
import {Entry} from './entry.model';

@Component({
  selector: 'new-entry',
  outputs: ['onSubmitNewEntry'],
  template: `
  <form class="form-inline text-center">
    <div class="form-group">
      <input type="text" class="form-control" placeholder="New Item" #itemInput>
    </div>
    <div class="form-group center-field">
      <input type="number" class="form-control" placeholder="Calories (kcal)" #caloriesInput>
    </div>
    <div class="form-group">
      <input type="number" class="form-control" placeholder="Protein (g)" #proteinInput>
    </div>
    <button (click)="addEntry(itemInput, caloriesInput, proteinInput)" class="btn btn-primary">Add</button>
  </form>
  <hr>
  `
})
export class NewEntryComponent {
  public onSubmitNewEntry: EventEmitter<any[]>;
  constructor(){
    this.onSubmitNewEntry = new EventEmitter();
  }
  addEntry(itemInput: HTMLInputElement, caloriesInput: HTMLInputElement, proteinInput: HTMLInputElement){
    var emitterArray = [];
    emitterArray.push(itemInput.value);
    emitterArray.push(parseInt(caloriesInput.value));
    emitterArray.push(parseInt(proteinInput.value));
    this.onSubmitNewEntry.emit(emitterArray);
    itemInput.value=null;
    caloriesInput.value=null;
    proteinInput.value=null;
  }
}
