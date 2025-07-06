import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-users-list',
  templateUrl: './list.html',
  styleUrls: ['./list.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ListComponent {
  users = [
    { name: 'admin', role: 'Yönetici' },
    { name: 'zeynep', role: 'Finans Görevlisi' },
    { name: 'mehmet', role: 'Gözlemci' }
  ];
}
