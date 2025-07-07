import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth'; // ✅ Import et

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class LoginComponent {
  mode: 'login' | 'register' = 'login';

  form: any;
  errorMsg = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService // ✅ Inject et
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  switchMode(mode: 'login' | 'register') {
    this.mode = mode;
    this.form.reset();
    this.errorMsg = '';
  }

  async onSubmit() {
    const { email, password } = this.form.value;

    if (!email || !password) {
      this.errorMsg = 'Tüm alanları doldurun.';
      return;
    }

    this.loading = true;
    this.errorMsg = '';

    try {
      if (this.mode === 'login') {
        await this.authService.signIn(email, password);
      } else {
        await this.authService.signUp(email, password);
      }
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      this.errorMsg = error.message || 'Bir hata oluştu.';
    } finally {
      this.loading = false;
    }
  }
}
