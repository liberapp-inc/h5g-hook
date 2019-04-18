// Liberapp 2019 - Tahiti Katagai
// プレイヤー　ワイヤーフックでジャンプ

class Player extends PhysicsObject{

    static I:Player = null;

    radius:number;
    button:Button;
    hookX:number = 0;
    hookY:number = 0;
    hookR:number = 0;
    wire:Wire = null;
    state:()=>void = this.stateNone;
    step:number = 0;

    constructor( px:number, py:number ) {
        super();

        Player.I = this;
        this.radius = PLAYER_RADIUS_PER_W * Util.width;
        this.setDisplay( px, py );
        this.setBody( px, py );
        Camera2D.transform( this.display );
        
        this.button = new Button( null, 0, 0, 0.5, 0.5, 1, 1, 0x000000, 0.0, null );
    }

    onDestroy(){
        super.onDestroy();
        this.button.destroy();
        Player.I = null;
    }

    setDisplay( px:number, py:number ){
        if( this.display )
            GameObject.display.removeChild( this.display );

        const shape = new egret.Shape();
        this.display = shape;
        GameObject.display.addChild(this.display);
        shape.x = px;
        shape.y = py;
        shape.graphics.beginFill( PLAYER_COLOR );
        shape.graphics.drawCircle( 0, 0, this.radius );
        shape.graphics.endFill();
    }

    setBody( px:number, py:number ){
        this.body = new p2.Body( {gravityScale:0, mass:1, position:[this.p2m(px), this.p2m(py)] } );
        this.body.addShape(new p2.Circle({ radius:this.p2m(this.radius) }));
        this.body.displays = [this.display];
        // this.body.on("impact",  this.conflict, this);            // p2.Bodyにevent設定してもコールされない
        // PhysicsObject.world.on("impact",  this.contact, this);   // p2.worldに直接event設定すると、１つの接触ですべてのp2.bodyオブジェクトがコールされる（抽出が必要）
        PhysicsObject.world.addBody(this.body);
    }

    fixedUpdate() {
        this.state();
        Camera2D.transform( this.display );
        Camera2D.x = this.px - Util.width*0.5;
    }

    setStateNone(){
        this.state = this.stateNone;
    }
    stateNone(){}

    setStateFree(){
        this.state = this.stateFree;
        this.step = 0;
        this.body.gravityScale = 1;
    }
    stateFree() {
        this.step++;
        let hook = Hook.detect( this.px+this.body.velocity[0]*4, this.py+this.body.velocity[1]*4 );
        if( hook && this.button.press ){
            this.setStateHang( hook );
            return;
        }

        // 転落チェック
        if( this.body.velocity[1] > 0 && this.display.y > Util.height ){
            new GameOver();
            this.setStateNone();
        }
    }

    setStateHang( hook:Hook ){
        this.state = this.stateHang;
        hook.catch();
        this.hookX = hook.px;
        this.hookY = hook.py;
        this.hookR = Math.sqrt( (this.hookX - this.px)**2 + (this.hookY - this.py)**2 );
        this.body.velocity[0] *= 1.2;
        this.body.velocity[1] *= 1.2;
        this.wire = new Wire( this.display, hook.display );
    }
    stateHang(){
        // ワイヤー長さの距離
        let dx = this.hookX - this.px;
        let dy = this.hookY - this.py;
        let d  = Math.sqrt( dx**2 + dy**2 );
        let _d = 1 / d;
        dx *= _d;
        dy *= _d;
        this.px = this.hookX - dx * this.hookR;
        this.py = this.hookY - dy * this.hookR;
        this.display.x = this.px;
        this.display.y = this.py;

        // 振り子
        let dot = this.body.velocity[0] * dx + this.body.velocity[1] * dy;
        if( dot < 0 ){
            this.body.velocity[0] -= dx * dot;
            this.body.velocity[1] -= dy * dot;
            this.body.velocity[0] *= 1.01;
            this.body.velocity[1] *= 1.01;
        }

        if( this.button.touch == false ){
            this.body.velocity[1] -= Util.height * 0.005;
            this.wire.rewind = true;
            this.wire = null;
            this.setStateFree();
        }
    }
}
