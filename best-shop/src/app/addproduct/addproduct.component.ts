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

        // name: this.form.controls['name'].value,
        // price: this.form.controls['price'].value,
        // tags: this.form.controls['tags'].value,
        // img: this.form.controls['img'].value,
        // description: this.form.controls['description'].value,

// Gdy wartosci zostaną wpisane na sztywno DZIAŁA, gdy sposobem powyżej nie bardzo -.-

         this.http.post('http://localhost:8443/api/product/add', {
          name: 'Produkt 15',
          price: 25,
          tags: ['elektronika', 'komputery Pc'],
          img: 'https://bakoma.pl/wp-content/uploads/bio_truskawka_370x370-200x200.png',
          description: 'Produkt najwyższej jakości, wyprodukowany w Chinach'
         })
          .subscribe(resp => {
            console.log(resp);
         });

           // console.log();

         this.form.reset();
  }

}
