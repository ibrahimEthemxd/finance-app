import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-users-roles',
  templateUrl: './roles.html',
  styleUrls: ['./roles.css'],
  imports: [CommonModule],
  standalone: true
})
export class RolesComponent {
  roles = [
    { name: 'Yönetici', permissions: ['Tüm erişimler'] },
    { name: 'Finans', permissions: ['Fatura', 'Gelir', 'Gider'] },
    { name: 'Gözlemci', permissions: ['Sadece görüntüleme'] }
  ];
}
