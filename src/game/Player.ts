// Liberapp 2019 - Tahiti Katagai
// プレイヤー　ワイヤーフックでジャンプ

class Player extends GameObject{

    static I:Player = null;

    x:number;
    y:number;
    state:()=>void = this.stateNone;
    step:number = 0;

    constructor() {
        super();

        Player.I = this;
        this.x = 0.3*Util.width;
        this.y = 0.4*Util.height;
    }

    onDestroy(){
        Player.I = null;
    }

    update() {
        this.state();

        if( Camera2D.x < this.x )
            Camera2D.x = this.x;
    }

    setStateNone(){
        this.state = this.stateNone;
    }
    stateNone(){}

    setStateHold(){
        this.state = this.stateHold;
    }
    stateHold(){
    }
    
    setStateFree(){
        this.state = this.stateFree;
        this.step = 0;
    }
    stateFree() {
    }
}
