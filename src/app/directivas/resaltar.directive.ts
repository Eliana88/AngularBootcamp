//Se genero con ng g d directivas/resaltar

import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor(private el: ElementRef) {
    console.log(el)
  }

  @Input() colorBase: string
  @Input('appResaltar') resaltarColor: string 
  @HostListener('mouseenter') onMouseEnter() {
    this.resaltar(this.resaltarColor || this.colorBase || 'red')    
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.resaltar(null)
  }
  private resaltar(color: string): void {
    this.el.nativeElement.style.backgroundColor = color
  }
}
