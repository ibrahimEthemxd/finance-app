import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-invoice-earchive',
  templateUrl: './earchive.html',
  styleUrls: ['./earchive.css'],
  imports: [CommonModule],
  standalone: true
})
export class EarchiveComponent {
  archiveInfo = {
    totalSent: 12,
    totalFailed: 1,
    lastSync: '2025-07-05 10:24'
  };
}
