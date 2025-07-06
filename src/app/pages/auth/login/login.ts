import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private router: Router) {
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

    if (this.mode === 'login') {
      if (email === 'test@test.com' && password === '123456') {
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMsg = 'Geçersiz giriş bilgileri.';
      }
    } else {
      this.router.navigate(['/dashboard']);
    }
  }
}
