var Car = /** @class */ (function () {
    function Car(name, year, color) {
        this.name = name;
        this.year = year;
        this.color = color;
    }
    Object.defineProperty(Car.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "Year", {
        get: function () {
            return this.year;
        },
        set: function (yr) {
            this.year = yr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "Color", {
        get: function () {
            return this.color;
        },
        set: function (clr) {
            this.color = clr;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
var car = new Car("Premier Padmini", 1980, "White");
car.Name = "Ford Mustang";
car.Color = "Purple";
car.Year = 1777;
console.log(car.Color, car.Year, car.Name);
