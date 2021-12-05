class Point {
  constructor(private x: number, private y: number) {
    this.x = x;
    this.y = y;
  }
  draw() {
    console.log(this.x, this.y);
  }
}

const p: Point = new Point(1, 2);

p.draw();
