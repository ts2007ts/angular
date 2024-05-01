import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any, filterBy: string) {
    if (filterBy.toLowerCase() === 'all' || filterBy.toLowerCase() === '' || list.length === 0) {
      return list;
    } else {
      return list.filter((s: any) => { return s.gender.toLowerCase() === filterBy.toLowerCase() });
    }
  }

}
