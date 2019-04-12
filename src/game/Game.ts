// Liberapp 2019 - Tahiti Katagai
// ゲームシーン

const PIXEL_PER_METER = 10;
const PLAYER_RADIUS_PER_W = 1/32;
const HOOK_RADIUS_PER_W = 1/32;
const BLOCK_SIZE_PER_H = 1/16;
const GRAVITY_PER_H = (1/300);

const SAVE_KEY_BESTSCORE = "tower-bestScore";

const BACK_COLOR = 0xf0e0d0;    // index.htmlで設定
const FONT_COLOR = 0x0000ff;
const PLAYER_COLOR = 0xc000f0;
const BLOCK_COLOR = 0xe00020;
const BLOCK_COLOR2 = 0xd00080;

class Game {

    static loadSceneGamePlay() {
        PhysicsObject.deltaScale = 1;
        new Score();
        new Player( Util.width * 0.2, Util.height * 0.3 );
        new StartMessage();

        new Hook( Util.width * 0.5, Util.height * 0.2 );
        new Hook( Util.width * 1.0, Util.height * 0.2 );
        new Hook( Util.width * 1.5, Util.height * 0.2 );
    }
}
