import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './container/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartTableHeadComponent } from './components/cart-table-head/cart-table-head.component';



@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    CartTableHeadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
