import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-income-categories',
  templateUrl: './categories.html',
  styleUrls: ['./categories.css'],
  imports: [CommonModule],
  standalone: true
})
export class CategoriesComponent {
  categories = ['Satış Geliri', 'Hizmet Geliri', 'Yatırım Geliri'];
}
