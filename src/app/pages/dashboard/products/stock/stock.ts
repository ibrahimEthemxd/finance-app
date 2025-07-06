import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-stock',
  templateUrl: './stock.html',
  styleUrls: ['./stock.css'],
  imports: [CommonModule],
  standalone: true
})
export class StockComponent {
  stockItems = [
    { name: 'Laptop', quantity: 12 },
    { name: 'Mouse', quantity: 42 },
    { name: 'Yazıcı', quantity: 5 }
  ];
}
