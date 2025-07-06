import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-income-new',
  templateUrl: './new.html',
  styleUrls: ['./new.css'],
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule]
})
export class NewComponent {
  incomeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.incomeForm = this.fb.group({
      source: [''],
      amount: [''],
      date: ['']
    });
  }

  submit() {
    console.log(this.incomeForm.value);
    alert('Gelir kaydedildi (simülasyon)');
  }
}
