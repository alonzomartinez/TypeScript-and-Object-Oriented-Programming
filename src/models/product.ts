export class Product {
  // Declares class properties first
  public sku: string;
  public name: string;
  public price: number;

  // Clean constructor parameters (just types)
  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  displayDetails(): string {
    return `[${this.sku}] ${this.name} - $${this.price.toFixed(2)}`;
  }

  getPriceWithTax(): number {
    return this.price;
  }
}