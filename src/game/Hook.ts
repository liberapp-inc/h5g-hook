// Liberapp 2019 - Tahiti Katagai
// フックターゲット

class Hook extends GameObject{

    static hooks:Hook[] = [];
    scale:number = 1;
    mx:number;
    my:number;

    constructor( px:number, py:number ) {
        super();

        Hook.hooks.push(this);
        this.mx = PhysicsObject.pixelToMeter( px );
        this.my = PhysicsObject.pixelToMeter( py );
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
        shape.graphics.lineStyle(8, 0xffc000);
        shape.graphics.drawCircle( 0, 0, HOOK_RADIUS_PER_W * Util.width );
    }

    update() {
        this.scale += (1.0 - this.scale) * 0.25;

        this.display.x = PhysicsObject.meterToPixel( this.mx );
        this.display.y = PhysicsObject.meterToPixel( this.my );
        Camera2D.transform( this.display );
    }

    static detect( px:number, py:number ):Hook{
        let nearest = null;
        let nd2 = Util.width**2;
        Hook.hooks.forEach( hook => {
            const d2 = (hook.display.x - px)**2 + (hook.display.y - py)**2;
            if( nd2 > d2 ){
                nd2 = d2;
                nearest = hook;
            }
        });
        return nearest;
    }
    
    catch(){
        this.scale = 2.0;
    }
}
