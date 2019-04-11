// Liberapp 2019 - Tahiti Katagai
// フックターゲット

class Hook extends GameObject{

    static hooks:Hook[] = [];
    scale:number = 1;

    constructor( px:number, py:number ) {
        super();

        Hook.hooks.push(this);
        this.setDisplay( px, py );
        Camera2D.transform( this.display );
    }

    onDestroy(){
        super.onDestroy();
        Hook.hooks = Hook.hooks.filter( obj => obj != this );
    }

    setDisplay( px:number, py:number ){
        if( this.display )
            GameObject.display.removeChild( this.display );

        const shape = new egret.Shape();
        this.display = shape;
        GameObject.display.addChildAt(this.display, 1);
        shape.x = px;
        shape.y = py;
        shape.graphics.drawCircle( px, py, HOOK_RADIUS_PER_WIDTH * Util.width );
    }

    update() {
        this.scale += (1.0 - this.scale) * 0.25;
        Camera2D.transform( this.display );
    }

    engage(){
        this.scale = 1.5;
    }
}
