import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-settings-templates',
  templateUrl: './templates.html',
  imports: [CommonModule],
  styleUrls: ['./templates.css'],
  standalone: true
})
export class TemplatesComponent {
  templates = ['Fatura A', 'Fatura B', 'İngilizce Şablon'];
}
