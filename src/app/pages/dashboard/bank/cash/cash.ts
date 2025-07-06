import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bank-cash',
  templateUrl: './cash.html',
  styleUrls: ['./cash.css'],
  imports: [CommonModule],
  standalone: true
})
export class CashComponent {
  cashBalance = 12450.75;
}
