export class Product {

  title: string;
  link: string;
  description: string;
  price: number;
  producer: string;

  constructor(title: string, link: string, description: string, price: number, producer: string) {
    this.title = title;
    this.link = link;
    this.description = description;
    this.price = price;
    this.producer = producer;
  }

}
