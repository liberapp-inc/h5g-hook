// Liberapp 2019 - Tahiti Katagai
// ワイヤー描画

class Wire extends GameObject{

    player:egret.DisplayObject;
    hook:egret.DisplayObject;
    rate:number = 0;
    rewind:boolean = false;

    constructor( player:egret.DisplayObject, hook:egret.DisplayObject ) {
        super();

        this.player = player;
        this.hook = hook;
        this.setDisplay();
        Camera2D.transform( this.display );
    }

    onDestroy(){
        this.player = this.hook = null;
    }

    setDisplay(){
        if( this.display )
            GameObject.display.removeChild( this.display );

        const shape = new egret.Shape();
        this.display = shape;
        GameObject.display.addChild(this.display);
        shape.graphics.lineStyle(2, PLAYER_COLOR);
        shape.graphics.moveTo( this.player.x, this.player.y );
        let x = this.hook.x - this.player.x;
        let y = this.hook.y - this.player.y;
        x = this.player.x + x * this.rate;
        y = this.player.y + y * this.rate;
        shape.graphics.lineTo( x, y );
    }

    update() {
        if( !this.rewind ){
            if( this.rate < 1 ){
                this.rate += 0.25;
            }
        }
        else{
            this.rate -= 0.25;
            if( this.rate <= 0 ){
                this.destroy();
                return;
            }
        }
        this.setDisplay();
    }
}
