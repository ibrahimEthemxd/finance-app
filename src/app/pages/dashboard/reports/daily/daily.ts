import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-report-general',
  templateUrl: './daily.html',
  styleUrls: ['./daily.css'],
  imports: [CommonModule],
  standalone: true
})
export class DailyComponent {
  totalIncome = 45000;
  totalExpense = 18000;

  get balance(): number {
    return this.totalIncome - this.totalExpense;
  }
}
