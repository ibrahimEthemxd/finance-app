import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  mode: 'login' | 'register' = 'login';
  form: any;
  errorMsg = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const currentPath = this.route.snapshot.routeConfig?.path;
    if (currentPath === 'register') {
      this.mode = 'register';
    } else {
      this.mode = 'login';
    }
  }

  switchMode(mode: 'login' | 'register') {
    this.router.navigate(['/auth', mode]);
  }

  async onSubmit() {
    const { email, password } = this.form.value;

    if (!email || !password) {
      this.errorMsg = 'Lütfen tüm alanları doldurun.';
      return;
    }

    this.loading = true;
    this.errorMsg = '';

    try {
      if (this.mode === 'login') {
        await this.authService.signIn(email, password);
      } else {
        await this.authService.signUp(email, password, 'Anonim'); 
      }
      this.router.navigate(['/dashboard/home']);
    } catch (error: any) {
      this.errorMsg = error.message || 'Bir hata oluştu.';
    } finally {
      this.loading = false;
    }
  }
}
