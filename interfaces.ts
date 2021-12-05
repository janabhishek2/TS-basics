// Interfaces define typee of object passed as parameter
// reduce number of params in function call by encapsulation of them in object
// properties of that object are mapped using interfaces for type checks

// method 1 inline annotation
function drawPoint(point: { x: number; y: number }) {
  //...
}

//method 2 build interface
//always use pascal naming conv.
interface Point {
  x: number;
  y: number;
  draw: () => void; // only declare draw here , do not define it
}
function drawPoint1(point: Point) {
  //...
}
///type check is done while calling the function
drawPoint({
  x: 1,
  y: 2,
});

//in interfaces we can not have declarations , we have only signature of funcs
