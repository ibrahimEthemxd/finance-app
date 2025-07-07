import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../app/services/auth'; // Path ihtiyaca göre güncellenebilir

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  imports: [CommonModule]
})
export class NavbarComponent implements OnInit {
  username = 'Kullanıcı';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      this.username = savedUsername;
    }
  }

  logout(): void {
    this.authService.signOut(); // Supabase çıkışı
    localStorage.removeItem('username');
    this.router.navigate(['/auth/login']);
  }
}
