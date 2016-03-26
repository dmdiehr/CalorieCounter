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
  <new-entry (onSubmitNewEntry)="createEntry($event)"></new-entry>
  <div class="text-center">
  <span class="item-header">Items</span>
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="low">Show Low Cal</option>
    <option value="notLow">Show High Cal</option>
    <option value="all" selected="selected">Show All</option>
  </select>
  </div>
  <div *ngFor="#currentEntry of entryList | low:filterLow">
    <entry-display
      (click)="entryClicked(currentEntry)"
      [class.selected]="currentEntry === selectedEntry"
      [entry]="currentEntry">
    </entry-display>
    <edit-entry-details *ngIf="currentEntry===selectedEntry" [entry]="selectedEntry"  (onSubmitDeleteEntry)="removeEntry($event)"></edit-entry-details>
  </div>





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
    this.onEntrySelect.emit(clickedEntry);

    if (this.selectedEntry === clickedEntry){
      this.selectedEntry = null;
    }
    else {
      this.selectedEntry = clickedEntry;
    }
  }
  createEntry(entryArray): void {
    var dummy = new Entry(entryArray[0], entryArray[1], entryArray[2]);
    this.entryList.push(dummy);
  }
  removeEntry(entry: Entry): void {
    var entryIndex = this.entryList.indexOf(entry);
    this.entryList.splice(entryIndex, 1);
  }
  onChange(filterOption){
    this.filterLow = filterOption;
  }
}
