import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './container/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartTableHeadComponent } from './components/cart-table-head/cart-table-head.component';
import { CartTableFootComponent } from './components/cart-table-foot/cart-table-foot.component';

const routes = [
  {
    path: "",
    component: CartComponent
  }
]

@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    CartTableHeadComponent,
    CartTableFootComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
