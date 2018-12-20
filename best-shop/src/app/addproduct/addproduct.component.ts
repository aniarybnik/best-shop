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
  editProduct;
  changedProduct;
  isEdit;  //  true --> zmiana inputa IMAGE na nieaktywny, i formularz może nie zawierać pola wypełnionego zdjęciami
  image = []; // mienna z obrazkami, jesli jest tryb Edycji przekazuje [];
  idProduct; //
  stringAtbutton;


 form: FormGroup;
  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router,
              private productService: ProductService,
              private storageService: StorageService) { }

  ngOnInit(): void {
    this.editProduct = this.storageService.takeStorage('productEdit'); // Pobranie z sesji Edytowanego produktu.
    // Jesli nie ma takiego (zwykły tryb dodawania produktu) to zmienna  == NULL

    sessionStorage.removeItem('productEdit'); // usunięcie z sesji

    this.isEdit = false; // Domyslnie zmienna isEdit jest ustawiona n FALSE
    this.stringAtbutton = 'Dodaj produkt';


    // Wypełnienie formularza wartosciami --  jesli brak EDYCJI to ''
    this.form = this.fb.group({
        name:  ['', Validators.required],
        description: ['', Validators.required],
        tags: ['', Validators.required],
        // img: ['', Validators.required],
        price: ['', Validators.required],
        producer: ['', Validators.required],
    });

    // Sprawdzenie czy zmienna z sessionStorage posiada wartosc, jesli tak to jest tryb EDYCJI,i pola z inputow
    // zamieniamy odpowiednimi wartosciami
    if (this.editProduct !== null) {
      this.form.setValue({
      name: this.editProduct.title,
      description: this.editProduct.description,
      tags: this.editProduct.tags,
      price: this.editProduct.price,
      producer: this.editProduct.producer
    });
      this.isEdit = true;  // Tryb edycji wiec zmienna isEdit zamieniamy na true --> Jesli jest na true to brak możliwosci dodania obrazow
      this.stringAtbutton = 'Edytuj';
    }

  }

  onFileChange(event) {
     this.fileAdd = [];
     this.imageLoaded = false;
     const files = event.target.files;
     let count = 0;

     for (let i = 0; i < files.length; i++) {
       const file = files[i];

       const picReader = new FileReader();

        picReader.addEventListener('loadend', (e: any) => {
          const objectImg = {};

          objectImg['result'] = e.target.result.toString().split(',')[1];
          objectImg['name'] = file.name;
          this.fileAdd.push(objectImg);
          count += 1;
          this.imageLoaded = count >= files.length;
        });

       picReader.readAsDataURL(file);
     }
  }


  addProduct() {

    if (this.editProduct !== null) {
      this.image = [];
      this.idProduct = this.editProduct.id;
    } else {
      this.image = this.fileAdd;
      this.idProduct = null;
    }

     const user = this.storageService.takeStorage('user'); // idUser
          this.productService.addProduct({
             name: this.form.controls['name'].value,
             price: this.form.controls['price'].value,
             tags: [this.form.controls['tags'].value],
             img: this.image,
             description: this.form.controls['description'].value,
             producer: this.form.controls['producer'].value,
             userId: user.id,
          }, this.idProduct)
            .subscribe(resp => {
             this.router.navigate(['../container']);
          });
  }

}
