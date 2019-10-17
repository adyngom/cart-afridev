import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[cart-table-foot]',
  template: `
    <tr class="tlc-light">
    <td colspan="8">
    <button type="button" class="btn btn-primary btn-lg">Large button</button>
    <button type="button" class="btn btn-secondary btn-lg">Large button</button>
    </td>
    </tr>
  `,
  styleUrls: ['./cart-table-foot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartTableFootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
