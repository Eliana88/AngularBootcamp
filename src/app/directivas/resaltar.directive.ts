import { Directive, ElementRef, Input, HostBinding } from '@angular/core';


//Se genero con ng g d directivas/resaltar

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor(private el: ElementRef) { 
    console.log(el);
  }

  @Input() colorBase: string;

  @Input('appResaltar') resaltarColor: string;

  @HostBinding('mouseenter') onMouseEnter(){
    this.resaltar(this.resaltarColor || this.colorBase || 'red');

  }

  @HostBinding('mouseleave') onMouseLeave(){
    this.resaltar(null);
  }

  private resaltar(color: string): void {

    this.el.nativeElement.style.backgroundColor = color;
  }


}
