export class Like {
  private liked: boolean;
  private numberOfLikes: number;

  constructor(initialLikes: number) {
    this.liked = false;
    this.numberOfLikes = initialLikes;
  }
  get Liked() {
    return this.liked;
  }
  set Liked(currLike) {
    if (this.liked == true) {
      this.liked = false;
      this.numberOfLikes--;
    } else {
      this.liked = true;
      this.numberOfLikes++;
    }
  }
  get NumberOfLikes() {
    return this.numberOfLikes;
  }
}

const like: Like = new Like(20);
like.Liked = true;
like.Liked = true;
console.log(like.Liked, like.NumberOfLikes);
