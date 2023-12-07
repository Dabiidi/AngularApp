import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCreation',
})
export class DateCreationPipe implements PipeTransform {
  transform(value: string | Date): string {
    if (value instanceof Date) {
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      };
      return value.toLocaleDateString(undefined, options);
    }

    return value;
  }
}
