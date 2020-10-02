import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysPassed'
})
export class DaysPassedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
