'use strict';

class Product{
    constructor(name,price){
        this.name = name;
        this.productPrice = price;
    }

    get price(){
        return this.productPrice;
    }
}

class Purchase {
    constructor(name, ...collection){
        this.name = name;
        this.collection = collection;
    }
    get price(){
        let price = 0;
        for(const item of this.collection){
            price += item.price;
        }
        return price;
    }
}

const p1 = new Product('Kavasaki',5000);
const p2 = new Product('BMW',6000);
const p3 = new Product('Lotos',2000);

const moto = new Purchase('Moto',p1,p2,p3);

const p5 = new Product('Bag', 50);
const p6 = new Product('Mouse pad', 5);
const textile = new Purchase('Textile', p5, p6);

const purchase = new Purchase('All sum',moto,textile)

console.dir(purchase, { depth: null });
console.log(`Total is ${purchase.price}`);
