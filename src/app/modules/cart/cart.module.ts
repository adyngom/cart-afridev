import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './container/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';



@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
