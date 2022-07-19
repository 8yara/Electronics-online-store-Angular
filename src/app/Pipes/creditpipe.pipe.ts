import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditpipe'
})
export class CreditpipePipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0,4)+"-"+value.substring(4,8)+"-"+value.substring(8,12)+"-"+value.substring(12)
  }

}
