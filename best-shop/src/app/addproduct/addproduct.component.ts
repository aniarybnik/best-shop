import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

 form: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.form = this.fb.group({
        name:  [],
        description: [],
        tags: [],
        img: [],
        price: [],
        producer: []
    });
  }



  addProduct() {


         this.http.post('http://localhost:8443/api/product/add', {

          name: this.form.controls['name'].value,
          price: this.form.controls['price'].value,
          tags: [this.form.controls['tags'].value],
          img: this.form.controls['img'].value,
          description: this.form.controls['description'].value,
         })
          .subscribe(resp => {
            console.log(resp);
         });

         this.form.reset();
         alert('Produkt dodano do bazy !');
  }

}
