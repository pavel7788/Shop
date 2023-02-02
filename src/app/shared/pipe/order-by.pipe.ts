import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(arr: any[], key: string, isAsc: boolean = false): any[] {
    const multiplier = isAsc ? 1 : -1
    return arr.sort((a, b) => a[key] > b[key] ? multiplier * 1 : multiplier * -1)    
  }   
}
