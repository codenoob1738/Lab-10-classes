class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        return this.price * this.quantity;
    }

    toString() {
        return `Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}}`;
    }

    // Static Method added to the ProductProperties Class Method//

    static applyDiscount(products, discount) {

        for (let product of products) {
            product.price = product.price - (product.price * discount);
        }
    }

}

class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return `Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;  //Overrides the toString method from the parent class to include the expiration date.//
    }
}

// Store class contains an inventory array that stores Products and Perishable Products objects //

class store {
    constructor() {
        this.inventory = [];
    }

    addProduct(product) {
        this.inventory.push(product);
    }
    
    // Method to calculate the total value of all products in the inventory.//

    getInventoryValue() {

        let totalValue = 0;

        this.inventory.forEach(product => {
            totalValue = totalValue + product.getTotalValue();
        });

        return totalValue;
    }

    // Method to find a product by name in the inventory and returns null if not found //

    findProductByName(name) {

        for (let product of this.inventory) {
            if (product.name === name) {
                return product;
            }
        }
        return null;
    }
}


// Instances of the PerishableProductProperties class//

const item1 = new PerishableProductProperties("Lettuce", 2.59, 1, "2026-03-31");
const item2 = new PerishableProductProperties("Ice Cream", 4.99, 1, "2027-04-15");

console.log(item1.toString());
console.log(item2.toString());


// Creating 5 products //

const product1 = new ProductProperties("Nike Tech", 275.99, 1);
const product2 = new ProductProperties("Adidas Ultraboost", 180.00, 1);
const product3 = new ProductProperties("PS5", 1229.99, 2);
const product4 = new PerishableProductProperties("Apple", 20.00, 17, "2026-07-31");
const product5 = new PerishableProductProperties("Mango", 3.99, 2, "2026-04-10");

// Adding products to a Store Object //

const myStore = new store();

myStore.addProduct(product1);
myStore.addProduct(product2);
myStore.addProduct(product3);
myStore.addProduct(product4);
myStore.addProduct(product5);

// Total Inventory Before discount is applied //

console.log("Total Inventory Value Before Discount is applied is: $" + myStore.getInventoryValue().toFixed(2));

// Value of inventory after a 15% discount is applied to all products in the inventory //

ProductProperties.applyDiscount(myStore.inventory, 0.15);

console.log("Total Inventory Value After Discount is applied is: $" + myStore.getInventoryValue().toFixed(2));
