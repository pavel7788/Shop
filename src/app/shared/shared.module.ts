import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { DrawBorderDirective } from './directives/drawborder.directive';
import { OrderByPipe } from './pipe/order-by.pipe';



@NgModule({
  declarations: [
    HighlightDirective,
    DrawBorderDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    DrawBorderDirective,
    OrderByPipe,
    CommonModule
  ]
})
export class SharedModule { }
