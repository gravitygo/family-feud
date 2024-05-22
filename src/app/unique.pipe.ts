import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique',
})
export class UniquePipe implements PipeTransform {
  transform(value: any[]): any[] {
    if (!Array.isArray(value)) {
      return value;
    }

    const uniqueArray = [];
    const seenItems = new Set();

    for (const item of value) {
      if (!seenItems.has(item)) {
        uniqueArray.push(item);
        seenItems.add(item);
      }
    }

    return uniqueArray;
  }
}
