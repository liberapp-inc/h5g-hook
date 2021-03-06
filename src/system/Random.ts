// Liberapp 2019 - Tahiti Katagai
// ランダム XorShift
// シード指定で乱数周期を再現できる

function rand():number { return Random.I.v(); }                                     // 0以上 1未満
function randF( min:number, max:number ):number { return Random.I.f(min, max); }    // min以上 max未満
function randI( min:number, max:number ):number { return Random.I.i(min, max); }    // min以上 max未満（整数）
function randBool():boolean { return Random.I.bool(); }

class Random {

    static readonly max:number = 0x0fffffff;

    static I:Random = new Random( Math.floor( Math.random()*Random.max ) ); // singleton instance

    v():number{ return (this.next() & Random.max) / (Random.max + 1); }     // 0以上 1未満
    f(min:number, max:number) { return min + this.v() * (max - min); }      // min以上 max未満
    i(min:number, max:number) { return Math.floor( this.f(min, max) ); }    // min以上 max未満（整数）
    bool():boolean { return ( (this.next() & 1) != 0 ); }

    // XOR Shift
    
    private x:number = 123456789;
    private y:number = 362436069;
    private z:number = 521288629;
    public  w:number;

    constructor(seed = 88675123) {
        this.w = seed;
    }

    private next() {
        let t;
        t = this.x ^ (this.x << 11);
        this.x = this.y; this.y = this.z; this.z = this.w;
        return this.w = (this.w ^ (this.w >>> 19)) ^ (t ^ (t >>> 8)); 
    }
}
