import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-models';
import { isNotEmpty, getTotalPrice } from '../../../../utils';

@Component({
  selector: 'tl-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[];
  headerLabels: Array<string> = [
    'Product', 
    'Description', 
    'Color', 
    'Size', 
    'Price', 
    'Qty', 
    'Amount', 
    ''
  ];
  
  constructor() { }

  ngOnInit() {
    this.cartItems = [
      {
        id: 1,
        inStock: true,
        name: 'Adidas Pro Series',
        price: 125,
        quantity: 1,
        image: {
          baseUrl: "prod_17_adidas_pro.jpg"
        },
        options: {
          size: "13",
          color: "W/B"
        }
      },
      {
        id: 2,
        inStock: true,
        name: 'Blucher Marron',
        price: 79.75,
        quantity: 1,
        image: {
          baseUrl: "prod_9_blucher_marron.jpg"
        },
        options: {
          size: "13",
          color: "Brown"
        }
      },
      {
        id: 3,
        inStock: true,
        name: 'Puma Ferrari Beige',
        price: 45,
        quantity: 1,
        image: {
          baseUrl: "prod_19_puma_ferrari_rouge_beige.jpg"
        },
        options: {
          size: "13",
          color: "Beige"
        }
      },
      {
        id: 4,
        inStock: true,
        name: 'Feozyz Gris Noir',
        price: 60,
        quantity: 2,
        image: {
          baseUrl: "prod_15_feozyz.jpg"
        },
        options: {
          size: "13",
          color: "Grey"
        }
      }
    ]
  }

  get numberOfItems(): number {
    return this.cartItems.length;
  }

  get total(): any {
    return this.cartItems.reduce( getTotalPrice, 0 );
  }

  handleRemove(item: CartItem) {
    this.cartItems = this.cartItems.filter( cartItem => cartItem.id !== item.id);
  }

  handleUpdateQuantity(product: { item: CartItem, action: string}): void {
    const { item , action } = product;
    // item.quantity = (action === "more") 
    //                 ? item.quantity + 1 : (item.quantity > 0) 
    //                 ? item.quantity - 1 : 0;

    // this.cartItems = { ...this.cartItems,  item }
    // //.filter( isNotEmpty );

      this.cartItems = this.cartItems
      .map( cartItem => {
        if( cartItem.id === item.id) {
          item.quantity = (action === "more") ? item.quantity + 1 
                          : (item.quantity > 0) ? item.quantity - 1 : 0;
        }
        return cartItem;
      })
      .filter( isNotEmpty );
    
  }

}
