// Liberapp 2019 - Tahiti Katagai
// 背景のビルボード

class BackBoard extends GameObject{

    px:number;
    py:number;

    constructor( px:number, py:number, radius:number ) {
        super();

        this.setDisplay( px, py, radius );
        Camera2D.transform( this.display );
    }

    setDisplay( px:number, py:number, radius:number ){
        if( this.display )
            GameObject.display.removeChild( this.display );

        const shape = new egret.Shape();
        this.display = shape;
        GameObject.display.addChildAt(this.display, 1);
        shape.x = px;
        shape.y = py;
        shape.graphics.beginFill( PLAYER_COLOR );
        shape.graphics.drawCircle( 0, 0, radius );
        shape.graphics.endFill();
    }

    update() {
        this.display.x = this.px;
        this.display.y = this.py;
        Camera2D.transform( this.display );
    }
}
