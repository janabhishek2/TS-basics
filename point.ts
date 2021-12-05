export class Point {
  private x: number;
  private y: number;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  public draw() {
    console.log(`X :${this.x} and Y: ${this.y}`);
  }
}
