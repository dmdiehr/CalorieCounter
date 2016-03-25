import { Component, EventEmitter} from 'angular2/core';
import { EntryDisplayComponent } from './entry-display.component';
import { Entry } from './entry.model';
import { EditEntryDetailsComponent } from './edit-entry-details.component';
import { NewEntryComponent } from './new-entry.component';


//////////////////// entry-list < root  ///////////////////
@Component({
  selector: 'entry-list',
  inputs: ['entryList'],
  outputs: ['onEntrySelect'],
  directives: [EntryDisplayComponent, EditEntryDetailsComponent, NewEntryComponent],
  template: `
  <entry-display *ngFor="#currentEntry of entryList"
    (click)="entryClicked(currentEntry)"
    [class.selected]="currentEntry === selectedEntry"
    [entry]="currentEntry">
  </entry-display>
  <edit-entry-details *ngIf="selectedEntry" [entry]="selectedEntry"></edit-entry-details>
  <new-entry (onSubmitNewEntry)="createEntry($event)"></new-entry>
  `
})
export class EntryListComponent {
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
  createEntry(description: string, calories: number, protein: number): void {
    this.entryList.push(
      new Entry(description, calories, protein)
    );
  }
}
