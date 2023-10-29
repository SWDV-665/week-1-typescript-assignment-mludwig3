var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, aisle_number, price) {
        this.name = name;
        this.quantity = quantity;
        this.aisle_number = aisle_number;
        this.price = price;
    }
    return Grocery;
}());
var Groceries = [
    new Grocery("Juice", 2, 15, 3.00),
    new Grocery("Cereal", 1, 5, 4.99),
    new Grocery("Ramen", 10, 8, 0.15),
    new Grocery("Pizza", 2, 20, 6.99)
];
var element = document.getElementById("myList");
Groceries.forEach(function (g) {
    var Li = document.createElement("Li");
    Li.textContent = "Product: ".concat(g.name, ", Quantity: ").concat(g.quantity, ",  Price: ").concat(g.price, ", Aisle Number: ").concat(g.aisle_number);
    element.appendChild(Li);
});
