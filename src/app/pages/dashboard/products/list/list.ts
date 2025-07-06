import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-list',
  templateUrl: './list.html',
  styleUrls: ['./list.css'],
  imports: [CommonModule],
  standalone: true
})
export class ListComponent {
  products = [
    { name: 'Laptop', price: 15000, stock: 12 },
    { name: 'Mouse', price: 350, stock: 42 },
    { name: 'Yazıcı', price: 4200, stock: 5 }
  ];
}
