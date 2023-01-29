
export class RotatingShape{
    
    rows;
    cols;
    matrix;
    constructor(shape){
        this.matrix = [];
        this.rows = shape.replaceAll(" ", "").trim().split("\n")
        
        for(var i = 0; i < this.rows.length; i++){
            this.matrix.push([...this.rows[i]]);
        }
    }

    Piece(piece) {
        this.matrix = piece;
    }

    toString(){
        var s='';
        for(var row = 0; row < this.matrix.length; row++){
            for(var col = 0; col < this.matrix[0].length; col++){
                s+=this.matrix[row][col]
            }
            s+="\n"
        }
        return s;
    }

    rotateRight(){
        var s = ""
        for(var row = 0; row < this.matrix.length; row++)
        {
            for(var col = this.matrix.length-1; col >=0; col--)
            {
                s+=this.matrix[col][row];
            }
            s+="\n";
        }
        return new RotatingShape(s);
    }


    rotateLeft(){
        var s = ""
        for(var col = this.matrix.length-1; col >= 0; col--)
        {
            for(var row = 0; row < this.matrix.length; row++)
            {
                s+=this.matrix[row][col];
            }
            s+="\n";
        }
        return new RotatingShape(s);
    }
}