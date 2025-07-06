import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-invoice-new',
  templateUrl: './new.html',
  styleUrls: ['./new.css'],
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule]
})
export class NewComponent {
  invoiceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.invoiceForm = this.fb.group({
      customer: [''],
      amount: [''],
      date: ['']
    });
  }

  submit() {
    console.log(this.invoiceForm.value);
    alert('Fatura oluşturuldu (simülasyon)');
  }
}
