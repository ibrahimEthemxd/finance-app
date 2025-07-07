import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../app/services/auth';
import { supabase } from '../../../app/core/supabase/supabaseClient';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  imports: [CommonModule]
})
export class NavbarComponent implements OnInit {
  username = 'Kullanıcı';
  showLogoutModal = false; 

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

 ngOnInit(): void {
  this.authService.getUser().then(async user => {
    if (user) {
      const { data, error } = await supabase
        .from('profiles')
        .select('username')
        .eq('id', user.id)
        .single();

      if (!error && data?.username) {
        this.username = data.username;
      } else {
        this.username = user.email ?? 'Kullanıcı';
      }
    }
  });
}


  openLogoutModal(): void {
    this.showLogoutModal = true;
  }

  cancelLogout(): void {
    this.showLogoutModal = false;
  }

  async confirmLogout(): Promise<void> {
    try {
      await this.authService.signOut();
      localStorage.removeItem('username');
      this.router.navigate(['/auth/login']);
    } catch (error) {
      console.error('Çıkış işlemi başarısız:', error);
    } finally {
      this.showLogoutModal = false;
    }
  }
}
