import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFilterComponent } from './container/input-filter.component';



@NgModule({
  declarations: [InputFilterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InputFilterComponent
  ]
})
export class InputFilterModule { }
