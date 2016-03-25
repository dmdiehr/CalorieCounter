import {Component, EventEmitter} from 'angular2/core';
import {Entry} from './entry.model';

@Component({
  selector: 'new-entry',
  outputs: ['onSubmitNewEntry'],
  template: `
  <form class="form-inline text-center">
    <div class="form-group">
      <label class="sr-only" for="item-input"></label>
      <input type="text" class="form-control" id="item-input" placeholder="New Item" #itemInput>
    </div>
    <div class="form-group center-field">
      <label class="sr-only" for="calories-input"></label>
      <input type="number" class="form-control" id="calories-input" placeholder="Calories (kcal)" #caloriesInput>
    </div>
    <div class="form-group">
      <label class="sr-only" for="protein-input"></label>
      <input type="number" class="form-control" id="protein-input" placeholder="Protein (g)" #proteinInput>
    </div>
    <button (click)="addEntry(itemInput, caloriesInput, proteinInput)" class="btn btn-primary add-button">Add</button>
  </form>
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
