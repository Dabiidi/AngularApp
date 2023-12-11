import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCreation',
})
export class DateCreationPipe implements PipeTransform {
  transform(value: string | Date): string {
    let date: Date;

    if (value instanceof Date) {
      date = value;
    } else if (typeof value === 'string') {
      date = new Date(value);
    } else {
      return value;
    }

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: 'numeric',
      minute: '2-digit',
    };

    return date.toLocaleDateString(undefined, options);
  }
}
