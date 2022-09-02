import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  // Example: 13 Aug 2022 (Sat), 14:22
  transform(value: any, args?: any): any {
    return this.transform(value,'d');
  }

}
