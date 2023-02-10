
export class RotatingShape{
    
    rows;
    matrix;
    currentPosition;
    amountOfPosition; 
    positions;

    constructor(shape, amountOfPosition=4, currentPosition = 0, positions){
        this.currentPosition = currentPosition;
        this.amountOfPosition = amountOfPosition;

        this.matrix = [];
        this.rows = shape.replaceAll(" ", "").trim().split("\n")

        for(var i = 0; i < this.rows.length; i++){
            this.matrix.push([...this.rows[i]]);
        }
        if(positions === undefined){
            this.positions = []
            this.positions.push(this.matrix);
            for(var i = 1; i < 4; i++){
                var d = this.positions[i-1]
                this.positions.push(this.makePositions(d))
            }
        }else{
            this.positions=positions;
        }
        
        Object.freeze(this);
    }


    toString(){
        return this.print(this.matrix)
    }
    
    print(mat){
        var s='';
        for(var row = 0; row < mat.length; row++){
            for(var col = 0; col < mat[0].length; col++){
                s+=mat[row][col]
            }
            s+="\n"
        }
        return s;
    }

    makePositions(mat){
        var pos = mat[0].map((val, i) => mat.map(row => row[i]).reverse())
        return pos;
    }
    
    rotateRight(){
        //var e = this.matrix[0].map((val, i) => this.matrix.map(row => row[i]).reverse())
        var currPos = this.currentPosition+1;
        if(currPos > this.amountOfPosition-1)
        {
            currPos = 0;
        }
        return new RotatingShape(this.print(this.positions[currPos]), this.amountOfPosition, currPos, this.positions);
    }
    rotateLeft(){
        //var e = this.matrix[0].map((val, i) => this.matrix.map(row => row[row.length-1-i]));
        var currPos = this.currentPosition-1;
      
        if(currPos < 0)
        {
            currPos = this.amountOfPosition-1;
        }
        
        return new RotatingShape(this.print(this.positions[currPos]),this.amountOfPosition, currPos, this.positions);
    }

    getMatrix(){
        return this.matrix;
    }
}