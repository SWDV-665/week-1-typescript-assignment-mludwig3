
class Grocery {
    name: string;
    quantity: number;
    aisle_number: number;
    price: number;
  
    constructor(name:any, quantity: number, aisle_number: number, price: number){
        this.name = name;
        this.quantity = quantity;
        this.aisle_number = aisle_number;
        this.price = price;}
       
    }
  
    let Groceries = [
    
    new Grocery( "Juice", 2, 15, 3.00),
    new Grocery("Cereal",1, 5, 4.99),
    new Grocery("Ramen", 10, 8, 0.15),
    new Grocery("Pizza", 2, 20, 6.99)
    ];

  
    const element = document.getElementById("myList");
   

    Groceries.forEach(g => {
        const Li = document.createElement("Li");
        Li.textContent = `Product: ${g.name}, Quantity: ${g.quantity},  Price: ${g.price}, Aisle Number: ${g.aisle_number}`;
        element.appendChild(Li);
    });

