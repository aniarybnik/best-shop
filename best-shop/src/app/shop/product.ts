export class Product {

  title: string;
  link: string;
  description: string;
  price: number;
  producer: string;
  count: number;

  constructor(title: string, link: string, description: string, price: number, producer: string, count: number) {
    this.title = title;
    this.link = link;
    this.description = description;
    this.price = price;
    this.producer = producer;
    this.count = 0;
  }

}
