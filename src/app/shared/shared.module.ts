import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { DrawborderDirective } from './directives/drawborder.directive';



@NgModule({
  declarations: [
    HighlightDirective,
    DrawborderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    DrawborderDirective
  ]
})
export class SharedModule { }
