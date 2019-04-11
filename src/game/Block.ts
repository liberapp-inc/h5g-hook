// Liberapp 2019 - Tahiti Katagai
// 障害物ブロック

class Block extends PhysicsObject{

    static blocks:Block[] = [];
    sizeW:number;
    sizeH:number;
    color:number;

    constructor( px:number, py:number, type:number ) {
        super();

        Block.blocks.push(this);
        this.sizeW = BLOCK_SIZE_PER_H * Util.height;
        this.sizeH = this.sizeW;
        switch( randI(0,3) ){
            case 0: this.color = BLOCK_COLOR;   break;
            case 1: this.color = BLOCK_COLOR2;  break;
            case 2: this.color = BLOCK_COLOR3;  break;
        }
        this.setDisplay( px, py, type );
        this.setBody( px, py, type );
        this.body.angle = randI(0,3) * Math.PI/2;
        this.display.rotation = this.body.angle * 180 / Math.PI;
        Camera2D.transform( this.display );
    }

    onDestroy(){
        super.onDestroy();
        Block.blocks = Block.blocks.filter( obj => obj != this );
    }

    setDisplay( px:number, py:number, type:number ){
        if( this.display )
            GameObject.display.removeChild( this.display );

        const shape = new egret.Shape();
        this.display = shape;
        GameObject.display.addChildAt(this.display, 1);
        shape.x = px;
        shape.y = py;
        shape.graphics.beginFill( this.color );
        switch( type ){
            case 0:
            shape.graphics.drawRect( -0.5*this.sizeW, -0.5*this.sizeH, this.sizeW, this.sizeH );
            break;
            case 1:
            shape.graphics.drawRect( -1.0*this.sizeW, -0.5*this.sizeH, this.sizeW, this.sizeH );
            shape.graphics.drawRect( +0.0*this.sizeW, -0.5*this.sizeH, this.sizeW, this.sizeH );
            break;
            case 2:
            shape.graphics.drawRect( -1.0*this.sizeW, -1.0*this.sizeH, this.sizeW, this.sizeH );
            shape.graphics.drawRect( +0.0*this.sizeW, -1.0*this.sizeH, this.sizeW, this.sizeH );
            shape.graphics.drawRect( +0.0*this.sizeW, +0.0*this.sizeH, this.sizeW, this.sizeH );
            break;
        }
        shape.graphics.endFill();
    }

    setBody( px:number, py:number, type:number ){
        switch( type ){
            case 0:
            this.body = new p2.Body( {gravityScale:0, mass:1, position:[this.p2m(px), this.p2m(py)]} );
            this.body.addShape(new p2.Box( { width:this.sizeW, height:this.sizeH } ), [0, 0], 0);
            break;
            case 1:
            this.body = new p2.Body( {gravityScale:0, mass:2, position:[this.p2m(px), this.p2m(py)]} );
            this.body.addShape(new p2.Box( { width:this.sizeW, height:this.sizeH } ), [-0.5*this.sizeW, 0], 0);
            this.body.addShape(new p2.Box( { width:this.sizeW, height:this.sizeH } ), [+0.5*this.sizeW, 0], 0);
            break;
            case 2:
            this.body = new p2.Body( {gravityScale:0, mass:3, position:[this.p2m(px), this.p2m(py)]} );
            this.body.addShape(new p2.Box( { width:this.sizeW, height:this.sizeH } ), [-0.5*this.sizeW, -0.5*this.sizeH], 0);
            this.body.addShape(new p2.Box( { width:this.sizeW, height:this.sizeH } ), [+0.5*this.sizeW, -0.5*this.sizeH], 0);
            this.body.addShape(new p2.Box( { width:this.sizeW, height:this.sizeH } ), [+0.5*this.sizeW, +0.5*this.sizeH], 0);
            break;
        }
        this.body.displays = [this.display];
        PhysicsObject.world.addBody(this.body);
    }

    fixedUpdate() {
        Camera2D.transform( this.display );

        if( this.display.x < Util.width * -0.25 ){
            this.destroy();
        }
    }

    drop(){
        this.body.setZeroForce();
        this.body.gravityScale = 1.0;
    }
}
