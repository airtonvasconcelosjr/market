import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeTags'
})
export class RemoveTagsPipe implements PipeTransform {
  transform(value: string): string {
    const regex = /(<([^>]+)>)/ig;
    return value.replace(regex, '');
  }
}
