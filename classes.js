var Point = /** @class */ (function () {
    function Point(x, y) {
        var _this = this;
        this.draw = function () {
            console.log(_this.x, _this.y);
        }; //methods
        // to make x,y optional use constructor(?x:number ,?y:number)
        this.x = x;
        this.y = y;
    }
    Point.prototype.getDistance = function (another) {
        // return this.x-another.x+this.y-another.y
    };
    return Point;
}());
// declare Point object
var point = new Point();
point.draw();
