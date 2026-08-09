import { Product } from "./product";

export class DigitalProduct extends Product {
  public fileSize: number;

  constructor(sku: string, name: string, price: number, fileSize: number) {
    super(sku, name, price);
    this.fileSize = fileSize;
  }

  // Override method (no tax)
  override getPriceWithTax(): number {
    return this.price;
  }

  // Get method for formatted file size
  get formattedFileSize(): string {
    return `${this.fileSize} MB`;
  }
}