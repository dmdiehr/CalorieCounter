import { Component, EventEmitter} from 'angular2/core';
import { EntryDisplayComponent } from './entry-display.component';
import { Entry } from './entry.model';
import { EditEntryDetailsComponent } from './edit-entry-details.component';
import { NewEntryComponent } from './new-entry.component';
import { LowPipe } from './low.pipe';


//////////////////// entry-list < root  ///////////////////
@Component({
  selector: 'entry-list',
  pipes: [LowPipe],
  inputs: ['entryList'],
  outputs: ['onEntrySelect'],
  directives: [EntryDisplayComponent, EditEntryDetailsComponent, NewEntryComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="low">Show Low Cal</option>
    <option value="notLow">Show High Cal</option>
    <option value="all" selected="selected">Show All</option>
  </select>
  <br><br><br>
  <entry-display *ngFor="#currentEntry of entryList | low:filterLow"
    (click)="entryClicked(currentEntry)"
    [class.selected]="currentEntry === selectedEntry"
    [entry]="currentEntry">
  </entry-display>
  <edit-entry-details *ngIf="selectedEntry" [entry]="selectedEntry"></edit-entry-details>
  <new-entry (onSubmitNewEntry)="createEntry($event)"></new-entry>
  `
})
export class EntryListComponent {
  public filterLow;
  public entryList: Entry[];
  public onEntrySelect: EventEmitter<Entry>;
  public selectedEntry: Entry;
  constructor() {
    this.onEntrySelect = new EventEmitter();
  }
  entryClicked(clickedEntry: Entry): void {
    console.log(clickedEntry);
    this.selectedEntry = clickedEntry;
    this.onEntrySelect.emit(clickedEntry);
  }
  createEntry(entryArray): void {
    var dummy = new Entry(entryArray[0], entryArray[1], entryArray[2]);
    console.log(dummy);
    this.entryList.push(dummy);
  }
  onChange(filterOption){
    this.filterLow = filterOption;
  }
}
