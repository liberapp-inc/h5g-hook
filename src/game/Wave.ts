// Liberapp 2019 - Tahiti Katagai
// フック配置Wave

class Wave extends GameObject{

    x:number;

    bx:number;

    constructor() {
        super();

        this.x = Util.width * 0.6;
        new Hook( this.x, Util.height * 0.2 );

        this.bx = Util.width * 1.0;
    }

    update() {
        if( this.x < Camera2D.x + Util.width * 2 ){
            const rate = Util.clamp( this.x / (Util.width * 20), 0, 1 );
            this.x += randF( 0.2, 0.8 + rate ) * Util.width;
            new Hook( this.x, Util.height * randF(0.1, 0.6) );
        }

        if( this.bx < Camera2D.x + Util.width * 2 ){
            this.bx += randF( 0.2, 2 ) * Util.width;
            new Block( this.x, Util.height * randF(0.2, 0.9) );
        }
    }
}
