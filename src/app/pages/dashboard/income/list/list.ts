import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-income-list',
  templateUrl: './list.html',
  styleUrls: ['./list.css'],
  imports: [CommonModule],
  standalone: true
})
export class ListComponent {
  payments = [
    { from: 'Zeynep Demir', amount: 2500, date: '2025-07-01' },
    { from: 'Ahmet Yılmaz', amount: 5000, date: '2025-07-03' }
  ];
}
