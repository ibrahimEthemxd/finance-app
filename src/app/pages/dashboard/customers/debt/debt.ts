import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-customer-debt',
  templateUrl: './debt.html',
  styleUrls: ['./debt.css'],
  imports: [CommonModule],
  standalone: true
})
export class DebtComponent {
  summary = {
    totalDebt: 7500,
    totalCredit: 12000
  };
}
