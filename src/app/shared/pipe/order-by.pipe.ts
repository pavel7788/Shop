import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(arr: any[] | null, key: string, isAsc: boolean = false): any[] | null {

    // without null type and this if block does not work in template with observable
    if (arr == null) {
      return arr;
    }

    const multiplier = isAsc ? 1 : -1
    return arr.sort((a, b) => a[key] > b[key] ? multiplier * 1 : multiplier * -1)    
  }   
}
