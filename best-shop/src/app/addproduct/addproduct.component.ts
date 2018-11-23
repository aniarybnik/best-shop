import { ProductService } from './../services/product.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addProduct',
  templateUrl: './addProduct.component.html',
  styleUrls: ['./addProduct.component.scss']
})
export class AddProductComponent implements OnInit {

 form: FormGroup;
  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
        name:  ['', Validators.required],
        description: ['', Validators.required],
        tags: ['', Validators.required],
        img: ['', Validators.required],
        price: ['', Validators.required],
        producer: ['', Validators.required]
    });
  }



  addProduct() {

          this.productService.addProduct({
             name: this.form.controls['name'].value,
             price: this.form.controls['price'].value,
             tags: [this.form.controls['tags'].value],
             img: this.form.controls['img'].value,
             description: this.form.controls['description'].value,
             producer: this.form.controls['producer'].value,
          })
            .subscribe(resp => {
             console.log(resp);
             this.router.navigate(['../container']);
          });

         // this.form.reset();
  }

}
