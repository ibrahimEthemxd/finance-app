import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings-company',
  templateUrl: './company.html',
  styleUrls: ['./company.css'],
  imports: [CommonModule],
  standalone: true
})
export class CompanyComponent {
  company = {
    name: 'Enoca Teknoloji A.Ş.',
    address: 'İstanbul, Türkiye',
    taxNumber: '1234567890'
  };
}
