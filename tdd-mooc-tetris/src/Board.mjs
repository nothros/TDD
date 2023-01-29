
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

  

  toString(){
    let s = '';
    for(let row = 0; row < this.height; row++)
    {
      for(let col = 0; col < this.width; col++)
      {
        s+=this.hasFallingAt(row, col)? this.fallingBlock.color : this.board[row][col];
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
      throw new Error("already falling");
    }
    this.fallingBlock = block;
  }


  hasFalling(){
    return this.fallingBlock != null;
  }

  tick(){
    if(this.fallingRow == this.height-1)
    {
      this.board[this.fallingRow][1] = this.fallingBlock.color
      this.fallingBlock = null;
    }else {
      this.fallingRow ++;

    }
  }


}
