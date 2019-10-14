import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.scss']
})
export class InputFilterComponent implements OnInit {
  sample: any[];
  constructor() { }

  ngOnInit() {
    this.sample = [
      {
        id: 1,
        name: 'Nike Air Max',
        price: 125,
        quantity: 1
      },
      {
        id: 2,
        name: 'Nike Classic White Sox',
        price: 9.75,
        quantity: 3
      },
      {
        id: 3,
        name: 'Puma Workout Pants',
        price: 25,
        quantity: 1
      },
      {
        id: 4,
        name: 'Adidas Collection Shirts',
        price: 20,
        quantity: 3
      }
    ]
  }

  filterList(search: string): void {
    const backup = [...this.sample];
    if(search.length >= 3) {
      this.sample = this.sample.filter( item => {
        return item.name.toLowerCase().startsWith(search.toLowerCase());
      })
    }
    else {
      this.sample = backup;
    }
  }

}
