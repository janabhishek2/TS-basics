"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
var Like = /** @class */ (function () {
    function Like(initialLikes) {
        this.liked = false;
        this.numberOfLikes = initialLikes;
    }
    Object.defineProperty(Like.prototype, "Liked", {
        get: function () {
            return this.liked;
        },
        set: function (currLike) {
            if (this.liked == true) {
                this.liked = false;
                this.numberOfLikes--;
            }
            else {
                this.liked = true;
                this.numberOfLikes++;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "NumberOfLikes", {
        get: function () {
            return this.numberOfLikes;
        },
        enumerable: false,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;
var like = new Like(20);
like.Liked = true;
like.Liked = true;
console.log(like.Liked, like.NumberOfLikes);
