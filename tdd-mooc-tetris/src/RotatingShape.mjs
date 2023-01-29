
export class RotatingShape{
    shape;

    constructor(shape){
        this.shape = shape.replaceAll(" ", "")+"\n";
        console.log(this.shape);

    }

    toString(){
        return this.shape;
    }
}