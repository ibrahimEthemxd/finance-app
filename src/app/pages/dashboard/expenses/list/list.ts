import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-expense-list',
  templateUrl: './list.html',
  imports: [CommonModule],
  styleUrls: ['./list.css'],
  standalone: true
})
export class ListComponent {
  expenses = [
    { title: 'Kira', amount: 8000 },
    { title: 'Elektrik', amount: 950 },
    { title: 'Ofis Malzemeleri', amount: 1200 }
  ];
}
