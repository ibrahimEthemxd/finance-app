import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-report-tax',
  templateUrl: './tax.html',
  styleUrls: ['./tax.css'],
  imports: [CommonModule],
  standalone: true
})
export class TaxComponent {
  taxReports = [
    { type: 'KDV', amount: 5200 },
    { type: 'Gelir Vergisi', amount: 3200 }
  ];
}
