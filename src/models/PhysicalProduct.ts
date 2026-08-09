import { Product } from "./product";

export class PhysicalProduct extends Product {
  public weight: number;

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price); // Pass base properties to parent class
    this.weight = weight;
  }

  // Override method for 10% tax rate
  override getPriceWithTax(): number {
    return this.price * 1.10;
  }

  // Get method for formatted weight
  get formattedWeight(): string {
    return `${this.weight} kg`;
  }
}