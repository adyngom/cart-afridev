import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { CartItem } from '../../models/cart-models';

export interface UpdateItem {
  item: CartItem,
  action: "more" | "less"
}

@Component({
  selector: '[cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {

  @Input() 
  item: CartItem;

  @Output()
  remove: EventEmitter<CartItem> = new EventEmitter();

  @Output()
  updateQty: EventEmitter<UpdateItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeItem(item: CartItem): void {
    this.remove.emit(item);
  }

  buyLess(item: CartItem): void {
    this.updateQty.emit({ item, action: "less"});
  }

  buyMore(item: CartItem): void {
    this.updateQty.emit({ item, action: "more"});
  }

}
