//_propertites should not be directly manipulated
const menu = {
    _meal: "",
    _price: 0,
    // add setter condition so the value only sets if is truthy
    set meal(mealToCheck) {
        if (typeof mealToCheck === "string") {
            return (this._meal = mealToCheck);
        }
    },
    set price(priceToCheck) {
        if (typeof priceToCheck === "number") {
            return (this._price = priceToCheck);
        }
    },
    // adda a getter method to make sure the values have been defined
    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today’s Special is ${this._meal} for $${this._price}!`;
        } else {
            return "Meal or price was not set correctly!";
        }
    },
};

// testing how not type checking these values could cause confusion
// menu._price = "Pizza";
// menu._meal = 5;
// console.log(menu); // outputs the following when no type check is appplied { _meal: 'test value', _price: 5 }

// test new set methods
// menu.price = 2;
// menu.meal = "Grilled Cheese";
// console.log(menu);

// test todaysSpecial method is working correctly
// menu.price = "Pizza";
// menu.meal = 2;
menu.meal = "Pizza";
menu.price = 2;
console.log(menu.todaysSpecial);
