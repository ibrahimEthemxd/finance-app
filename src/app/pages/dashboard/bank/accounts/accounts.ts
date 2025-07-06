import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-bank-accounts',
  templateUrl: './accounts.html',
  styleUrls: ['./accounts.css'],
  imports: [CommonModule],
  standalone: true
})
export class AccountsComponent {
  accounts = [
    { bank: 'Ziraat Bankası', iban: 'TR12 0001 0000 1234 5678 9012 34', balance: 15200 },
    { bank: 'İş Bankası', iban: 'TR45 0006 1005 1234 5678 9012 34', balance: 8400 }
  ];
}
