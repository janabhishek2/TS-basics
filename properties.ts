class Car {
  private name: string; // fieldss
  private year: number;
  private color: string;

  constructor(name?: string, year?: number, color?: string) {
    this.name = name; // setting values with constructor
    this.year = year;
    this.color = color;
  }
  get Name() {
    //property Name as getter for name field
    return this.name;
  }
  get Year() {
    //property Year as getter for year field
    return this.year;
  }
  get Color() {
    return this.color;
  }
  set Name(name) {
    // property Name as setter for name field
    this.name = name;
  }
  set Color(clr) {
    this.color = clr;
  }
  set Year(yr) {
    this.year = yr;
  }
}

const car: Car = new Car("Premier Padmini", 1980, "White");
car.Name = "Ford Mustang";
car.Color = "Purple";
car.Year = 1777;
console.log(car.Color, car.Year, car.Name); // car.Name is a getter and setter
// for getter use
// const val=car.Name;
//for setter use
//car.Name="New Value";
