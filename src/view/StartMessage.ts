// Liberapp 2019 - Tahiti Katagai
// スタート時の説明テキスト

class StartMessage extends GameObject{

    texts:egret.TextField[] = [];
    
    constructor() {
        super();

        this.texts[0] = Util.newTextField("タップしてフック", Util.width / 20, FONT_COLOR, 0.5, 0.4, true, false);
        this.texts[1] = Util.newTextField("振り子のようにジャンプ", Util.width / 20, FONT_COLOR, 0.5, 0.5, true, false);
        this.texts.forEach( text =>{ GameObject.display.addChild( text ); });

        GameObject.display.once(egret.TouchEvent.TOUCH_TAP, this.tap, this);
    }

    onDestroy(){
        this.texts.forEach( text =>{ GameObject.display.removeChild( text ); });
        this.texts = null;
    }

    update() {}

    tap(e:egret.TouchEvent){
        Player.I.setStateFree();
        this.destroy();
    }
}
