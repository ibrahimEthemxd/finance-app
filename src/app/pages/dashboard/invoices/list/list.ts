import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-invoice-list',
  templateUrl: './list.html',
  styleUrls: ['./list.css'],
  imports: [CommonModule],
  standalone: true
})
export class ListComponent {
  invoices = [
    { number: 'INV-001', customer: 'Ahmet Yılmaz', total: 3500 },
    { number: 'INV-002', customer: 'Zeynep Demir', total: 800 },
    { number: 'INV-003', customer: 'Mehmet Kaya', total: 15000 }
  ];
}
