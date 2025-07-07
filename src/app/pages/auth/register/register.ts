import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

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

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required], // Yeni alan eklendi
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    this.errorMsg = '';
    const { username, email, password } = this.registerForm.value;

    if (username && email && password) {
      localStorage.setItem('username', username); // Kullanıcı adı kaydediliyor
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMsg = 'Kayıt başarısız';
    }
  }
}
