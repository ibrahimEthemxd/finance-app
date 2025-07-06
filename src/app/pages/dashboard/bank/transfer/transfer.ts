import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-bank-transfer',
  templateUrl: './transfer.html',
  styleUrls: ['./transfer.css'],
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule]
})
export class TransferComponent {
  transferForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.transferForm = this.fb.group({
      from: [''],
      to: [''],
      amount: ['']
    });
  }

  submit() {
    console.log(this.transferForm.value);
    alert('Transfer işlemi simüle edildi');
  }
}
