import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // impure pipe (disadvantage is calling it each time change deduction is happening).....
  //by default the pipe is pure pipe(disadvantage is not good for sorting )
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
