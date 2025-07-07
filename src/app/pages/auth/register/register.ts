import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth'; // Dosya yolunu senin yapına göre kontrol et

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class RegisterComponent {
  registerForm;
  errorMsg = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  goToLogin() {
  this.router.navigate(['/auth/login']);
}


  async onSubmit() {
    this.errorMsg = '';
    this.loading = true;

    const { username, email, password } = this.registerForm.value;

    if (!username || !email || !password) {
      this.errorMsg = 'Lütfen tüm alanları doldurun.';
      this.loading = false;
      return;
    }

    try {
      console.log('🚀 Kayıt başlatılıyor:', { email, password });

      const result = await this.authService.signUp(email, password, username);

      console.log('✅ Supabase kayıt sonucu:', result);

      localStorage.setItem('username', username);
      this.router.navigate(['/dashboard/home']);
    } catch (error: any) {
      console.error('❌ Kayıt hatası:', error);
      this.errorMsg = error.message || 'Kayıt sırasında bir hata oluştu.';
    } finally {
      this.loading = false;
    }
  }
}
