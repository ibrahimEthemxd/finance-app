import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-settings-taxes',
  templateUrl: './tax.html',
  styleUrls: ['./tax.css'],
  imports: [CommonModule],
  standalone: true
})
export class TaxComponent {
  tax = [
    { name: 'KDV', rate: 18 },
    { name: 'Stopaj', rate: 15 }
  ];
}
