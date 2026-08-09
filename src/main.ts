import "./style.css"; 
import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { calculateTax } from "./utils/taxCalculator";
import { Product } from "./models/product";

// Both products
const laptop = new PhysicalProduct("ELEC-001", "Developer Laptop", 1200, 2.4);
const ebook = new DigitalProduct("BOOK-099", "TypeScript Mastery Guide", 29.99, 14.5);

// Both in an array typed to the base class
const inventory: Product[] = [laptop, ebook];

// Grabbing the container element
const container = document.getElementById("product-container");

// Simple loop to generate the cards
if (container) {
  for (let i = 0; i < inventory.length; i++) {
    const product = inventory[i];
    const card = document.createElement("div");
    card.className = "product-card";

    // If/else for checking the type
    let specificDetail = "";
    if (product instanceof PhysicalProduct) {
      specificDetail = "<p><strong>Weight:</strong> " + product.formattedWeight + "</p>";
    } else if (product instanceof DigitalProduct) {
      specificDetail = "<p><strong>File Size:</strong> " + product.formattedFileSize + "</p>";
    }

    const finalPrice = calculateTax(product);

    // Template string
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p><strong>SKU:</strong> ${product.sku}</p>
      <p><strong>Base Price:</strong> $${product.price.toFixed(2)}</p>
      ${specificDetail}
      <p class="total-price">
        Total Price (with tax): $${finalPrice.toFixed(2)}
      </p>
    `;

    container.appendChild(card);
  }
}