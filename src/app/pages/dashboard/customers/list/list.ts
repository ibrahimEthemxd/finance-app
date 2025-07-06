import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  templateUrl: './list.html',
  styleUrls: ['./list.css'],
  imports: [CommonModule],
})
export class ListComponent {
  customers = [
    { name: 'Ahmet Yılmaz', balance: -1500 },
    { name: 'Mehmet Kaya', balance: 5000 },
    { name: 'Zeynep Demir', balance: 0 }
  ];
}
