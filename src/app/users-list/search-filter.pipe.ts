import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: any[], filterText: string): any {
    if (!list)  return [] ;
    if (!filterText)  return list ;
    debugger
    filterText = filterText.toLowerCase();
    return list.filter(it => {
      if (it.name) {
        return it.name.toLowerCase().includes(filterText);
      }
    });
  }
}
