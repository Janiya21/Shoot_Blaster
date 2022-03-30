export default class Player{
    constructor(x,y) {
        this.x=x;
        this.y=y;
        this.width=50;
        this.height=50;
        this.speed=4;
    }

    draw(ctx){
        ctx.strokeStyle="yellow";
        ctx.fillStyle="black";
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}