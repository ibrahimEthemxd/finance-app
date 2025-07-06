import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-new',
  templateUrl: './new.html',
  styleUrls: ['./new.css'],
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule]
})
export class NewComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: [''],
      price: [''],
      stock: ['']
    });
  }

  submit() {
    console.log(this.productForm.value);
    alert("Ürün eklendi (simülasyon)");
  }
}
