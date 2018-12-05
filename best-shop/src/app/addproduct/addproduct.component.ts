import { StorageService } from './../services/storage.service';
import { ProductService } from './../services/product.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addProduct.component.html',
  styleUrls: ['./addProduct.component.scss']
})
export class AddProductComponent implements OnInit {

  fileAdd;
  imageLoaded;

 form: FormGroup;
  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router,
              private productService: ProductService,
              private storageService: StorageService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
        name:  ['', Validators.required],
        description: ['', Validators.required],
        tags: ['', Validators.required],
        // img: ['', Validators.required],
        price: ['', Validators.required],
        producer: ['', Validators.required],
    });
  }

  onFileChange(event) {
     this.fileAdd = [];
     this.imageLoaded = false;
     const files = event.target.files;
     let count = 0;

    //  console.debug(files);
     for (let i = 0; i < files.length; i++) {
       const file = files[i];

       const picReader = new FileReader();

        picReader.addEventListener('loadend', (e: any) => {
          // console.debug('Koniec', e);

          const objectImg = {};

          objectImg['result'] = e.target.result.toString().split(',')[1];
          objectImg['name'] = file.name;
          this.fileAdd.push(objectImg);
          count += 1;
          this.imageLoaded = count >= files.length;
          // console.debug('File', this.fileAdd);
        });

       picReader.readAsDataURL(file);
     }
    // console.debug(event);
  }


  addProduct() {

     const user = this.storageService.takeStorage('user');

          this.productService.addProduct({
             name: this.form.controls['name'].value,
             price: this.form.controls['price'].value,
             tags: [this.form.controls['tags'].value],
             img: this.fileAdd,
             description: this.form.controls['description'].value,
             producer: this.form.controls['producer'].value,
             userId: user.id,
          })
            .subscribe(resp => {
            //  console.log(resp);
             this.router.navigate(['../container']);
          });

         // this.form.reset();
  }

}
