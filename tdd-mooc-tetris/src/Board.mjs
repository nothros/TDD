export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    let string = '';
    for(var i = 0; i < this.height; i+=1)
    {
      string+='.'.repeat(this.width)
      string+='\n'
    }
    return string;
  }
}
