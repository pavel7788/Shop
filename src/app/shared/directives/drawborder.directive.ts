import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDrawBorder]'
})
export class DrawBorderDirective {

  @HostBinding('style.border') border!: string;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.border = '1px solid blue';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.border = '1px solid lightgrey';
  }

}
