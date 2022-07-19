import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCardDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style=`border :1px solid black ;
    box-shadow: 1px 1px 1px 1px #888888;
    border-radius: 5px;
    padding: 5px;`
   }
   @HostListener('mouseover') onMouseOver()
   {
    this.elem.nativeElement.style=` box-shadow: 2px 2px 2px 2px #888888;`;
   }
   @HostListener('mouseout') onMouseOut()
   {
  
    this.elem.nativeElement.style=`  box-shadow: 1px 1px 1px 1px #888888; `
   }

}
