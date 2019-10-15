import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: '[cart-table-head]',
  template: `
      <tr>
        <th scope="col" *ngFor="let label of headerLabels; trackBy: trackByFn">{{label}}</th>
      </tr>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartTableHeadComponent {

  @Input()
  headerLabels: Array<string> = [];

  constructor() { }

  trackByFn(index, item) {
    return index;
  }

}
