import { Product } from "../models/product";

export function calculateTax(product: Product): number {
  return product.getPriceWithTax();
}