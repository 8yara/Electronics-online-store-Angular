import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idpipe'
})
export class IdpipePipe implements PipeTransform {

  transform(value: string): string {
     var m,y,d;
     if(Number(value.substring(0,1))==2)
     {
        y="19"+value.substring(1,3);
     }
     m=value.substring(3,5)
     d=value.substring(5,7)
     return (d+"-"+m+"-"+y) ;
   
  }

}
