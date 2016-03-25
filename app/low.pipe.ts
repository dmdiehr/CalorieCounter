import {Pipe, PipeTransform} from 'angular2/core';
import {Entry} from './entry.model';

@Pipe({
  name: "low",
  pure: false
})
export class LowPipe implements PipeTransform {
  transform(input: Entry[], args) {
    var desiredLowState = args[0];
    if(desiredLowState === "low") {
      return input.filter(function(entry) {
        return (entry.calories < 300);
      });
    } else if (desiredLowState === "notLow") {
      return input.filter(function(entry) {
        return (entry.calories >= 300);
      });
    } else {
      return input;
    }
  }
}
