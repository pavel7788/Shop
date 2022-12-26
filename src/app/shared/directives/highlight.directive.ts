import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: Event): void {
    this.el.nativeElement.style.backgroundColor = '#B1D4E0';
  }

  @HostListener('mouseleave', ['$event.target'])
  onMouseLeave(target: HTMLElement): void {
    this.el.nativeElement.style.backgroundColor = 'white';
  }

}
