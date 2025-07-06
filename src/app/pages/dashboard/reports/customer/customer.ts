import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-report-customer',
  templateUrl: './customer.html',
  styleUrls: ['./customer.css'],
  imports: [CommonModule],
  standalone: true
})
export class CustomerComponent {
  customerReports = [
    { name: 'Ahmet Yılmaz', totalSales: 12000 },
    { name: 'Zeynep Demir', totalSales: 7000 }
  ];
}
