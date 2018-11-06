export class Product {

  title: string;
  link: string;
  description: string;
  price: number;

  constructor(title: string, link: string, description: string, price: number) {
    this.title = title;
    this.link = link;
    this.description = description;
    this.price = price;
  }

}
