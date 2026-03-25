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

// Instances of the PerishableProductProperties class//

const item1 = new PerishableProductProperties("Lettuce", 2.59, 1, "2026-03-31");
const item2 = new PerishableProductProperties("Ice Cream", 4.99, 1, "2027-04-15");

console.log(item1.toString());
console.log(item2.toString());