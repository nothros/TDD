
export class RotatingShape{
    
    rows;
    cols;
    matrix;
    constructor(shape){
        this.matrix = [];
        this.rows = shape.replaceAll(" ", "").split("\n")
        
        for(var i = 0; i < this.rows.length; i++){
            this.matrix.push([...this.rows[i]]);
        }
    }

    toString(){
        return this.print();
    }

    print(){
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
        null;
    }

}