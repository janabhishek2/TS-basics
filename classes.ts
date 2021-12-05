class Point {
  private x: number; // properties or fields
  y: number;
  //by default all methods and variables are public
  // access modifiers : public,private,protected
  constructor(x?: number, y?: number) {
    // to make x,y optional use constructor(?x:number ,?y:number)
    this.x = x;
    this.y = y;
  }
  public draw = () => {
    console.log(this.x, this.y);
  }; //methods
  getDistance(another: Point) {
    // return this.x-another.x+this.y-another.y
  }
}

// declare Point object

let point: Point = new Point();

point.draw();
