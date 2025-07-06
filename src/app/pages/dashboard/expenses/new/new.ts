import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-expense-new',
  templateUrl: './new.html',
  styleUrls: ['./new.css'],
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule]
})
export class NewComponent {
  expenseForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.expenseForm = this.fb.group({
      title: [''],
      amount: [''],
      date: ['']
    });
  }

  submit() {
    console.log(this.expenseForm.value);
    alert('Gider kaydedildi (simülasyon)');
  }
}
