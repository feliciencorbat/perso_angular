import {Directive, ElementRef, HostListener, Input} from '@angular/core';

/**
 * Directive which add color border for elements when mouse enter
 */
@Directive({
  selector: '[appSetElementWithMouse]'
})
export class SetElementWithMouseDirective {

  private initialColor: string = "#f5f5f5";
  private defaultColor: string = "#009688";

  constructor(private el: ElementRef) {
    this.setBorderColor(this.initialColor);
  }

  @Input('appSetElementWithMouse') borderColor: string; //avec alias

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorderColor(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorderColor(this.initialColor);
  }

  setBorderColor(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
