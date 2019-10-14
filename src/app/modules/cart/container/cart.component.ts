import { Component, OnInit, OnChanges } from '@angular/core';
import { CartItem } from '../models/cart-models';

@Component({
  selector: 'tl-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnChanges {
  cartItems: CartItem[];
  constructor() { }

  ngOnInit() {
    this.cartItems = [
      {
        id: 1,
        inStock: true,
        name: 'Nike Air Max',
        price: 125,
        quantity: 1
      },
      {
        id: 2,
        inStock: true,
        name: 'Nike Classic White Sox',
        price: 9.75,
        quantity: 3
      },
      {
        id: 3,
        inStock: true,
        name: 'Puma Workout Pants',
        price: 25,
        quantity: 1
      },
      {
        id: 4,
        inStock: true,
        name: 'Adidas Collection Shirts',
        price: 20,
        quantity: 3
      }
    ]
  }

  ngOnChanges(changes) {
    console.group('OnChanges');
      console.log(changes);
    console.groupEnd();
  }

  get numberOfItems(): number {
    return this.cartItems.length;
  }

  get total(): number {
    let price = 0;
    this.cartItems.map( (item:CartItem) =>  {
      price += (item.price * item.quantity); 
      return item;
    });
    return price;
  }

  handleRemove(item: CartItem) {
    this.cartItems = this.cartItems.filter( cartItem => cartItem.id !== item.id);
  }

  private newQuantity(item: CartItem) {
    
  }

  updateQuantity(product: any): void {
    const { item, action } = product;
    this.cartItems = this.cartItems
    .map( cartItem => {
      if( cartItem.id === item.id) {
        item.quantity = (action === "more") ? item.quantity + 1 
                        : (item.quantity > 0) ? item.quantity - 1 : 0;
      }
      return cartItem;
    })
    .filter( item => item.quantity !== 0);
  }

}
