import { Pipe, PipeTransform } from '@angular/core';
import { Resident } from './resident';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(residents: Resident[], value: string): Resident[] {
    if (value === 'all') {
      return residents;
    } else {
      return residents.filter(resident => {
        return resident.gender === value;
      });
    }
  }

}
