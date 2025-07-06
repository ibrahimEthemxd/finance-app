import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-customer-new',
  templateUrl: './new.html',
  styleUrls: ['./new.css'],
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule]
})
export class NewComponent {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      name: [''],
      email: [''],
      phone: ['']
    });
  }

  submit() {
    console.log(this.customerForm.value);
    alert("Müşteri kaydedildi (simülasyon)");
  }
}
