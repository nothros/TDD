
export class Board {
  width;
  height;
  board;
  ticker;
  block;
  fallingBlock;
  fallingRow;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.reset();
    this.ticker = 0;
    this.block = undefined;
    this.fallingRow = 0;
  }

  reset() {
    return Array(this.height).fill().map(() => Array(this.width).fill('.'));
  }

  toString() {
    this.toString2();
    let string = '';
    this.board.forEach(row => {
      row.forEach(cell => {
        string+=cell;
      }
      ),string+="\n";
    });

    return this.toString2();
  }

  toString2(){
    let s = '';
    for(let row = 0; row < this.height; row++)
    {
      for(let col = 0; col < this.width; col++)
      {
        s+=this.hasFallingAt(row, col)? this.fallingBlock.color : '.';
      }
      s+='\n'
    }
    console.log(s);
    return s;
  }

  hasFallingAt(row, col)
  {
    return this.hasFalling() && row == this.fallingRow && col == 1;
  }
  
  drop(block){
    if(this.hasFalling())
    {
      throw Error("already falling");
    }
    this.fallingBlock = block;
  }


  hasFalling(){
    return this.fallingBlock != null;
  }

  tick(){
    this.fallingRow ++;
  }


}
