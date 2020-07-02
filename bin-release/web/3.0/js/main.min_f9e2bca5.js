function rand(){return Random.I.v()}function randF(t,e){return Random.I.f(t,e)}function randI(t,e){return Random.I.i(t,e)}function randBool(){return Random.I.bool()}var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))(function(o,r){function n(t){try{h(s.next(t))}catch(e){r(e)}}function a(t){try{h(s["throw"](t))}catch(e){r(e)}}function h(t){t.done?o(t.value):new i(function(e){e(t.value)}).then(n,a)}h((s=s.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return s([t,e])}}function s(i){if(o)throw new TypeError("Generator is already executing.");for(;h;)try{if(o=1,r&&(n=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(n=n.call(r,i[1])).done)return n;switch(r=0,n&&(i=[0,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return h.label++,{value:i[1],done:!1};case 5:h.label++,r=i[1],i=[0];continue;case 7:i=h.ops.pop(),h.trys.pop();continue;default:if(n=h.trys,!(n=n.length>0&&n[n.length-1])&&(6===i[0]||2===i[0])){h=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){h.label=i[1];break}if(6===i[0]&&h.label<n[1]){h.label=n[1],n=i;break}if(n&&h.label<n[2]){h.label=n[2],h.ops.push(i);break}n[2]&&h.ops.pop(),h.trys.pop();continue}i=e.call(t,h)}catch(s){i=[6,s],r=0}finally{o=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var o,r,n,a,h={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},__assign=this&&this.__assign||Object.assign||function(t){for(var e,i=1,s=arguments.length;s>i;i++){e=arguments[i];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},GameObject=function(){function t(){this.display=null,t.objects.push(this)}return t.prototype.destroy=function(){this.deleteFlag=!0},t.prototype.onDestroy=function(){},t.initial=function(e){t.display=e},t.process=function(){t.objects.forEach(function(t){return t.update()}),t.objects=t.objects.filter(function(t){return t.deleteFlag&&t["delete"](),!t.deleteFlag}),t.transit&&(t.dispose(),t.transit(),t.transit=null)},t.dispose=function(){t.objects=t.objects.filter(function(t){return t.destroy(),t["delete"](),!1})},t.prototype["delete"]=function(){this.onDestroy(),this.display&&(t.display.removeChild(this.display),this.display=null)},t.objects=[],t}();__reflect(GameObject.prototype,"GameObject");var PhysicsObject=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.onDestroy=function(){this.body&&(e.world.removeBody(this.body),this.body.displays=[],this.body=null)},e.prototype.update=function(){if(this.display){var t=this.body,e=this.display;e.x=this.px,e.y=this.py,e.rotation=180*t.angle/Math.PI}this.fixedUpdate()},e.prepare=function(t){e.pixelPerMeter=t,e.meterPerPixel=1/t,e.width=e.pixelToMeter(Util.width),e.height=e.pixelToMeter(Util.height),e.world=new p2.World,e.world.gravity=[0,.04*e.height],e.world.defaultContactMaterial.friction*=2,e.lastTime=Date.now(),e.deltaScale=1},e.progress=function(){var t=Date.now(),i=(t-this.lastTime)*this.deltaScale;this.lastTime=t,i>0&&e.world.step(1/60*this.deltaScale,i,4)},e.pixelToMeter=function(t){return t*e.meterPerPixel},e.meterToPixel=function(t){return t*e.pixelPerMeter},e.prototype.m2p=function(t){return e.meterToPixel(t)},e.prototype.p2m=function(t){return e.pixelToMeter(t)},Object.defineProperty(e.prototype,"px",{get:function(){return e.meterToPixel(this.mx)},set:function(t){this.mx=e.pixelToMeter(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"py",{get:function(){return e.meterToPixel(this.my)},set:function(t){this.my=e.pixelToMeter(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"mx",{get:function(){return this.body.position[0]},set:function(t){this.body.position[0]=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"my",{get:function(){return this.body.position[1]},set:function(t){this.body.position[1]=t},enumerable:!0,configurable:!0}),e.deltaScale=1,e}(GameObject);__reflect(PhysicsObject.prototype,"PhysicsObject");var Camera2D=function(){function t(){}return t.initial=function(){t.x=0,t.y=0,t.scale=1},t.transform=function(e,i){void 0===i&&(i=1),e.x=t.transX(e.x),e.y=t.transY(e.y),e.scaleX=e.scaleY=t.scale*i},t.transX=function(e){return(e-t.x)*t.scale},t.transY=function(e){return(e-t.y)*t.scale},t.x=0,t.y=0,t.scale=1,t}();__reflect(Camera2D.prototype,"Camera2D");var Block=function(t){function e(i,s,o,r,n){var a=t.call(this)||this;return e.blocks.push(a),a.sizeW=o,a.sizeH=r,a.color=BLOCK_COLOR,a.setDisplay(i,s),a.setBody(i,s),a.body.angle=n,a.display.rotation=180*a.body.angle/Math.PI,Camera2D.transform(a.display),a}return __extends(e,t),e.newBlock=function(t,i){var s=BLOCK_SIZE_PER_W*Util.width;new e(t,i,s,s,.25*Math.PI)},e.newFloor=function(t,i){var s=FLOOR_SIZE_PER_W*Util.width,o=Util.height-i;new e(t,i+.5*o,.7*s,o,0)},e.prototype.onDestroy=function(){var i=this;t.prototype.onDestroy.call(this),e.blocks=e.blocks.filter(function(t){return t!=i})},e.prototype.setDisplay=function(t,e){this.display&&GameObject.display.removeChild(this.display);var i=new egret.Shape;this.display=i,GameObject.display.addChildAt(this.display,1),i.x=t,i.y=e,i.graphics.beginFill(this.color),i.graphics.drawRect(-.5*this.sizeW,-.5*this.sizeH,this.sizeW,this.sizeH),i.graphics.endFill()},e.prototype.setBody=function(t,e){this.body=new p2.Body({gravityScale:0,mass:1,position:[this.p2m(t),this.p2m(e)],type:p2.Body.STATIC}),this.body.addShape(new p2.Box({width:this.p2m(this.sizeW),height:this.p2m(this.sizeH)}),[0,0],0),this.body.displays=[this.display],PhysicsObject.world.addBody(this.body)},e.prototype.fixedUpdate=function(){Camera2D.transform(this.display),this.display.x<=-2*Util.width&&this.destroy()},e.blocks=[],e}(PhysicsObject);__reflect(Block.prototype,"Block");var PIXEL_PER_METER=10,PLAYER_RADIUS_PER_W=.025,HOOK_RADIUS_PER_W=1/60,BLOCK_SIZE_PER_W=.05,FLOOR_SIZE_PER_W=1/3,GRAVITY_PER_H=1/300,SAVE_KEY_BESTSCORE="hook-bestScore",BACK_COLOR=16772066,FONT_COLOR=14725216,PLAYER_COLOR=878974,COIN_COLOR=12619824,BLOCK_COLOR=12582939,FLOOR_COLOR=6324368,Game=function(){function t(){}return t.loadSceneGamePlay=function(){PhysicsObject.deltaScale=1,new Score,new Player(.2*Util.width,.2*Util.height),new Wave,new StartMessage},t}();__reflect(Game.prototype,"Game");var Hook=function(t){function e(i,s){var o=t.call(this)||this;return o.scale=1,e.hooks.push(o),o.px=i,o.py=s,o.setDisplay(i,s),Camera2D.transform(o.display),o}return __extends(e,t),e.prototype.onDestroy=function(){var i=this;t.prototype.onDestroy.call(this),e.hooks=e.hooks.filter(function(t){return t!=i})},e.prototype.setDisplay=function(t,e){this.display&&GameObject.display.removeChild(this.display);var i=new egret.Shape;this.display=i,GameObject.display.addChildAt(this.display,1),i.x=t,i.y=e,i.graphics.lineStyle(4,PLAYER_COLOR),i.graphics.drawCircle(0,0,HOOK_RADIUS_PER_W*Util.width)},e.prototype.update=function(){this.scale+=.25*(1-this.scale),this.display.x=this.px,this.display.y=this.py,Camera2D.transform(this.display,this.scale),this.display.x<=-2*Util.width&&this.destroy()},e.detect=function(t,i){var s=null,o=Math.pow(.7*Util.width,2);return e.hooks.forEach(function(e){if(t<=e.px){var r=Math.pow(e.px-t,2)+Math.pow(e.py-i,2);o>r&&(o=r,s=e)}}),s&&(s.scale=1.5),s},e.prototype["catch"]=function(){this.scale=2.5},e.hooks=[],e}(GameObject);__reflect(Hook.prototype,"Hook");var Player=function(t){function e(i,s){var o=t.call(this)||this;return o.hookR=0,o.hook=null,o.wire=null,o.state=o.stateNone,o.step=0,e.I=o,o.radius=PLAYER_RADIUS_PER_W*Util.width,o.setDisplay(i,s),o.setBody(i,s),Camera2D.transform(o.display),o.button=new Button(null,0,0,.5,.5,1,1,0,0,null),o}return __extends(e,t),e.prototype.onDestroy=function(){t.prototype.onDestroy.call(this),this.button.destroy(),e.I=null},e.prototype.setDisplay=function(t,e){this.display&&GameObject.display.removeChild(this.display);var i=new egret.Shape;this.display=i,GameObject.display.addChild(this.display),i.x=t,i.y=e,i.graphics.beginFill(PLAYER_COLOR),i.graphics.drawCircle(0,0,this.radius),i.graphics.endFill()},e.prototype.setBody=function(t,e){this.body=new p2.Body({gravityScale:0,mass:1,position:[this.p2m(t),this.p2m(e)]}),this.body.addShape(new p2.Circle({radius:this.p2m(this.radius)})),this.body.displays=[this.display],PhysicsObject.world.addBody(this.body),PhysicsObject.world.on("impact",this.conflict,this)},e.prototype.conflict=function(t){this.state!=this.stateNone&&(this.gameOver(),this.setStateNone())},e.prototype.fixedUpdate=function(){this.state(),Camera2D.x=this.px-.25*Util.width,Camera2D.transform(this.display)},e.prototype.setStateNone=function(){this.state=this.stateNone,this.wire&&(this.wire.rewind=!0,this.wire=null)},e.prototype.stateNone=function(){},e.prototype.setStateFree=function(){this.state=this.stateFree,this.step=0,this.body.gravityScale=1},e.prototype.stateFree=function(){this.step++;var t=Hook.detect(this.px,this.py);return t&&this.button.press?void this.setStateHang(t):void(this.body.velocity[1]>0&&this.display.y>Util.height&&(this.gameOver(),this.setStateNone()))},e.prototype.setStateHang=function(t){this.state=this.stateHang,this.hook=t,this.hook["catch"](),this.hookR=Math.sqrt(Math.pow(this.hook.px-this.px,2)+Math.pow(this.hook.py-this.py,2)),this.body.velocity[0]*=1.2,this.body.velocity[1]*=1.2,this.wire=new Wire(this.display,t.display)},e.prototype.stateHang=function(){var t=this.hook.px-this.px,e=this.hook.py-this.py,i=Math.sqrt(Math.pow(t,2)+Math.pow(e,2)),s=1/i;t*=s,e*=s,this.px=this.hook.px-t*this.hookR,this.py=this.hook.py-e*this.hookR,this.display.x=this.px,this.display.y=this.py;var o=this.body.velocity[0]*t+this.body.velocity[1]*e;this.body.velocity[0]-=t*o,this.body.velocity[1]-=e*o,this.body.velocity[0]*=1.01,this.body.velocity[1]*=1.01,0==this.button.touch&&(this.body.velocity[1]-=.005*Util.height,this.wire.rewind=!0,this.wire=null,this.setStateFree())},e.prototype.gameOver=function(){new GameOver,PhysicsObject.deltaScale=.1;for(var t=2*this.radius*Camera2D.scale,e=0;5>e;e++){var i=rand()*Math.PI*2,s=Math.cos(i),o=-Math.sin(i),r=t*(2+e);new EffectLine(this.display.x+s*t,this.display.y+o*t,s*r,o*r,PLAYER_COLOR)}new EffectCircle(this.display.x,this.display.y,t,PLAYER_COLOR)},e.I=null,e}(PhysicsObject);__reflect(Player.prototype,"Player");var Wave=function(t){function e(){var e=t.call(this)||this;return e.hardRate=0,e.fx=0,e.hx=.6*Util.width,new Hook(e.hx,.2*Util.height),e}return __extends(e,t),e.prototype.update=function(){if(this.hardRate=Util.clamp(this.fx/(20*Util.width),0,1),this.fx<Camera2D.x+1*Util.width){var t=FLOOR_SIZE_PER_W*Util.width;this.fx+=t;var e=this.fx,i=Util.height*randF(.7,.95);Block.newFloor(e,i),rand()<.5*this.hardRate&&Block.newBlock(e+randF(t*-.4,.4*t),randF(.1*Util.height,i))}this.hx<Camera2D.x+1*Util.width&&(this.hx+=randF(.2,.5+.5*this.hardRate)*Util.width,new Hook(this.hx,Util.height*randF(.05,.2+.3*this.hardRate)))},e}(GameObject);__reflect(Wave.prototype,"Wave");var Wire=function(t){function e(e,i){var s=t.call(this)||this;return s.rate=0,s.rewind=!1,s.player=e,s.hook=i,s.setDisplay(),Camera2D.transform(s.display),s}return __extends(e,t),e.prototype.onDestroy=function(){this.player=this.hook=null},e.prototype.setDisplay=function(){this.display&&GameObject.display.removeChild(this.display);var t=new egret.Shape;this.display=t,GameObject.display.addChild(this.display),t.graphics.lineStyle(4,PLAYER_COLOR),t.graphics.moveTo(this.player.x,this.player.y);var e=this.hook.x-this.player.x,i=this.hook.y-this.player.y;e=this.player.x+e*this.rate,i=this.player.y+i*this.rate,t.graphics.lineTo(e,i)},e.prototype.update=function(){if(this.rewind){if(this.rate-=.25,this.rate<=0)return void this.destroy()}else this.rate<1&&(this.rate+=.25);this.setDisplay()},e}(GameObject);__reflect(Wire.prototype,"Wire");var Button=function(t){function e(e,i,s,o,r,n,a,h,l,c){var p=t.call(this)||this;p.text=null,p.onTap=null,p.press=!1,p.touch=!1,p.x=0,p.y=0;var d=new egret.Shape;GameObject.display.addChild(d),d.graphics.beginFill(h,l);var u=n*Util.width,y=a*Util.height;return d.graphics.drawRoundRect(-.5*u,-.5*y,u,y,.2*u),d.graphics.endFill(),d.touchEnabled=!0,d.x=o*Util.width,d.y=r*Util.height,p.display=d,e&&(p.text=Util.newTextField(e,i,s,o,r,!0,!1),GameObject.display.addChild(p.text)),p.onTap=c,p.onTap&&p.display.addEventListener(egret.TouchEvent.TOUCH_TAP,p.onTap,p),p.display.addEventListener(egret.TouchEvent.TOUCH_BEGIN,p.touchBegin,p),p.display.addEventListener(egret.TouchEvent.TOUCH_MOVE,p.touchMove,p),p.display.addEventListener(egret.TouchEvent.TOUCH_END,p.touchEnd,p),p}return __extends(e,t),e.prototype.onDestroy=function(){this.onTap&&this.display.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this),GameObject.display.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchBegin,this),GameObject.display.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMove,this),GameObject.display.removeEventListener(egret.TouchEvent.TOUCH_END,this.touchEnd,this),this.text&&GameObject.display.removeChild(this.text)},e.prototype.update=function(){var t=this.touch?1.1:1;this.display.scaleX=this.display.scaleY=this.display.scaleX+.25*(t-this.display.scaleX),this.press=!1},e.prototype.touchBegin=function(t){this.x=t.stageX,this.y=t.stageY,this.press=!0,this.touch=!0},e.prototype.touchMove=function(t){this.x=t.stageX,this.y=t.stageY,this.touch=!0},e.prototype.touchEnd=function(t){this.touch=!1},e}(GameObject);__reflect(Button.prototype,"Button");var EffectCircle=function(t){function e(i,s,o,r){void 0===r&&(r=16760832);var n=t.call(this)||this;return n.frame=e.maxFrame,n.radius=o,n.color=r,n.setShape(i,s,n.radius),n}return __extends(e,t),e.prototype.setShape=function(t,i,s){var o=new egret.Shape;this.display&&GameObject.display.removeChild(this.display),this.display=o,GameObject.display.addChild(this.display),o.x=t,o.y=i,o.graphics.lineStyle(3+10*(this.frame/e.maxFrame),this.color),o.graphics.drawCircle(0,0,s)},e.prototype.update=function(){return--this.frame<=0?void this.destroy():(this.radius*=1.03,void this.setShape(this.display.x,this.display.y,this.radius))},e.maxFrame=30,e}(GameObject);__reflect(EffectCircle.prototype,"EffectCircle");var SDK=!1,Main=function(t){function e(){var e=t.call(this)||this;return e.once(egret.Event.ADDED_TO_STAGE,e.addToStage,e),e}return __extends(e,t),e.prototype.addToStage=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return Util.init(this),GameObject.initial(this.stage),PhysicsObject.prepare(PIXEL_PER_METER),Camera2D.initial(),SDK?[4,Social.init()]:[3,2];case 1:t.sent(),t.label=2;case 2:return Game.loadSceneGamePlay(),egret.startTick(this.tickLoop,this),[2]}})})},e.prototype.tickLoop=function(t){return PhysicsObject.progress(),GameObject.process(),!1},e}(eui.UILayer);__reflect(Main.prototype,"Main");var EffectLine=function(t){function e(e,i,s,o,r){void 0===r&&(r=16760832);var n=t.call(this)||this;return n.frame=0,n.x=e,n.y=i,n.vx=s,n.vy=o,n.color=r,n.setShape(.01),n}return __extends(e,t),e.prototype.setShape=function(t){var e=new egret.Shape;this.display&&GameObject.display.removeChild(this.display),this.display=e,GameObject.display.addChild(this.display),t=t*Math.PI*.5;var i=Math.sin(t),s=1-Math.cos(t);e.graphics.lineStyle(6,this.color),e.graphics.moveTo(this.x+this.vx*i,this.y+this.vy*i),e.graphics.lineTo(this.x+this.vx*s,this.y+this.vy*s)},e.prototype.update=function(){if(++this.frame>=e.maxFrame)return void this.destroy();var t=this.frame/e.maxFrame;this.setShape(t)},e.maxFrame=30,e}(GameObject);__reflect(EffectLine.prototype,"EffectLine");var Random=function(){function t(t){void 0===t&&(t=88675123),this.x=123456789,this.y=362436069,this.z=521288629,this.w=t}return t.prototype.v=function(){return(this.next()&t.max)/(t.max+1)},t.prototype.f=function(t,e){return t+this.v()*(e-t)},t.prototype.i=function(t,e){return Math.floor(this.f(t,e))},t.prototype.bool=function(){return 0!=(1&this.next())},t.prototype.next=function(){var t;return t=this.x^this.x<<11,this.x=this.y,this.y=this.z,this.z=this.w,this.w=this.w^this.w>>>19^(t^t>>>8)},t.max=268435455,t.I=new t(Math.floor(Math.random()*t.max)),t}();__reflect(Random.prototype,"Random");var Sdk=function(){function t(){}return t.loadSdk=function(){return __awaiter(this,void 0,void 0,function(){var t,e,i;return __generator(this,function(s){switch(s.label){case 0:return console.log("============================================================"),console.log("Liberapp.loadSdk:"),this.env=this.detectMode(location.origin),console.log("env: ",this.env),t=this.resolveSdkUrl(this.sdkPath),console.log("srcUrl: ",t),[4,this.loadScript(t)];case 1:return e=s.sent(),console.log("script:",e),i=window.LiberappSdk,"egret-wing"!==this.env?[3,3]:[4,i.enableDebug()];case 2:s.sent(),s.label=3;case 3:return console.log("liberappSdk:",i),[2,i]}})})},t.detectMode=function(t){return/^https:\/\/(.+)\.a\.liberapp\.net$/.test(t)?"production":/^https:\/\/(.+)\.a\.staging.\.liberapp\.net$/.test(t)?"staging":/^https:\/\/(.+)\.a\.development\.liberapp\.net$/.test(t)?"development":"egret-wing"},t.resolveSdkUrl=function(t){var e=this.baseUrls[this.env];return""+e+t},t.loadScript=function(t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,new Promise(function(e,i){var s=document.createElement("script");s.async=!1,s.src=t,s.onload=function(){return e(s)},s.onerror=function(){return i(new Error("Can not load script: src:"+t))},document.head.append(s)})]})})},t.baseUrls={production:"https://liberapp.net",staging:"https://staging.liberapp.net",development:"https://localhost","egret-wing":"https://staging.liberapp.net"},t.sdkPath="/dist/sdk/liberapp-ja-0_9.js",t}();__reflect(Sdk.prototype,"Sdk");var Social=function(){function t(){}return t.init=function(){return __awaiter(this,void 0,void 0,function(){var t,e,i,s,o,r,n,a,h,l;return __generator(this,function(c){switch(c.label){case 0:return[4,Sdk.loadSdk()];case 1:return t=c.sent(),this.sdk=t,Toast.show({text:"ログイン中・・・",delay:3e4,canHide:!0}),[4,t.initializeAsync()];case 2:return c.sent(),[4,t.startGameAsync()];case 3:return c.sent(),Toast.show({text:this.playerName+"さんようこそ！",delay:3e4,canHide:!0}),e=this,[4,t.getLeaderboardAsync("default")];case 4:return e.leaderboard=c.sent(),[4,Promise.all([this.leaderboard.getEntryCountAsync(),this.leaderboard.getEntriesAsync(3,0),this.leaderboard.getPlayerEntryAsync(),this.sdk.player.getDataAsync(["level"])])];case 5:return i=c.sent(),s=i[0],o=i[1],r=i[2],n=i[3],this.playerEntry=r,this.rawData=n,this.hasBest?Toast.show({text:"今のところ"+s+"人中"+this.bestRank+"位です",delay:3e3}):(a=o[0],a&&(console.log(a),h=a.getPlayer().getName(),l=a.getScore(),Toast.show({text:s+"人が遊んでいます!\n一番は"+h+"さん\nスコアは"+l+"です",delay:3e3}))),[2]}})})},Object.defineProperty(t,"hasBest",{get:function(){return!!this.myBestEntry},enumerable:!0,configurable:!0}),Object.defineProperty(t,"bestScore",{get:function(){return this.hasBest?this.myBestEntry.getScore():0},enumerable:!0,configurable:!0}),Object.defineProperty(t,"bestRank",{get:function(){return this.hasBest?this.myBestEntry.getRank():void 0},enumerable:!0,configurable:!0}),Object.defineProperty(t,"playerEntry",{set:function(e){console.log("myBest:",this.myBestEntry,e),this.myBestEntry=e,Score.bestScore=t.bestScore,Score.bestRank=t.bestRank},enumerable:!0,configurable:!0}),t.setScore=function(t){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(i){switch(i.label){case 0:return console.log("setScore "+t),Toast.show({text:"ハイスコアを送信中",delay:3e4,canHide:!0}),e=this,[4,this.leaderboard.setScoreAsync(t)];case 1:return e.playerEntry=i.sent(),Toast.show({text:"順位は"+this.bestRank+"位でした",delay:3e3}),[2]}})})},Object.defineProperty(t,"playerName",{get:function(){return this.sdk.player.getName()||"名無し"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"hasData",{get:function(){return!!this.rawData},enumerable:!0,configurable:!0}),Object.defineProperty(t,"level",{get:function(){return this.hasData&&"level"in this.rawData?this.rawData.level:0},enumerable:!0,configurable:!0}),t.setLevel=function(t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return this.rawData.level=t,console.log("setLevel "+t+" "+this.rawData.level),Toast.show({text:"達成レベルを送信中",delay:3e4,canHide:!0}),[4,this.sdk.player.setDataAsync({level:t})];case 1:return e.sent(),Toast.show({text:"送信完了",delay:1500}),[2]}})})},t}();__reflect(Social.prototype,"Social");var DefaultToastOptions={text:"",delay:3e3,canHide:!1},Toast=function(t){function e(e){var i=t.call(this)||this;return i.queue=[],i.rect=new eui.Rect,i.rect.alpha=0,i.label=new eui.Label,i.label.maxWidth=e,i.rect.addEventListener(eui.UIEvent.CREATION_COMPLETE,i.onRectCreationComplete,i),i.label.addEventListener(eui.UIEvent.RESIZE,i.onLabelResized,i),GameObject.display.addChild(i.rect),i}return __extends(e,t),e.prototype.update=function(){},e.show=function(t){var i=__assign({},DefaultToastOptions,t);this.I||(this.I=new e(.6*Util.width)),this.I.show(i)},e.prototype.onDestroy=function(){var t=e.I;e.I=void 0,t&&(t.rect.parent.removeChild(t.rect),t.rect.removeChildren(),t.rect=void 0,t.label=void 0)},e.prototype.show=function(t){if(console.log("Toast.show"),this.currentOptions){if(!this.currentOptions.canHide)return void this.queue.push(t);this.currentTween.setPaused(!0),this.currentTween=void 0,this.currentOptions=void 0,this.queue=[]}this.currentOptions=t,this.toastText=t.text,this.currentTween=egret.Tween.get(this.rect),this.currentTween.to({alpha:1},300).wait(t.delay).call(this.onStartHide,this)},e.prototype.onStartHide=function(){console.log("Toast.onStartHide"),void 0!==this.currentTween&&(this.currentTween=egret.Tween.get(this.rect),this.currentTween.to({alpha:0},300).call(this.onCompleteHide,this))},e.prototype.onCompleteHide=function(){if(console.log("Toast.onCompleteHide"),this.currentTween=void 0,this.currentOptions=void 0,0===this.queue.length)return void this.destroy();var t=this.queue.shift();this.show(t)},e.prototype.onRectCreationComplete=function(){console.log("Toast.onRectCreationComplete"),this.rect.fillColor=0,this.rect.fillAlpha=.6,this.rect.horizontalCenter=0,this.rect.verticalCenter=0,this.rect.ellipseWidth=30,this.rect.ellipseHeight=30,this.label.x=20,this.label.y=20,this.label.size=28,this.rect.addChild(this.label),this.toastText=""},Object.defineProperty(e.prototype,"toastText",{set:function(t){console.log("Toast.toastText:"),this.label.text=t},enumerable:!0,configurable:!0}),e.prototype.onLabelResized=function(){console.log("Toast.onLabelResized:"),this.rect.width=this.label.width+40,this.rect.height=this.label.height+40,this.rect.x=(Util.width-this.rect.width)/2,this.rect.y=(Util.height-this.rect.height)/2},e}(GameObject);__reflect(Toast.prototype,"Toast");var Util=function(){function t(){}return t.init=function(t){this.height=t.stage.stageHeight,this.width=t.stage.stageWidth},t.clamp=function(t,e,i){return e>t&&(t=e),t>i&&(t=i),t},t.color=function(t,e,i){return 65536*Math.floor(255*t)+256*Math.floor(255*e)+Math.floor(255*i)},t.colorLerp=function(t,e,i){var s=1-i,o=((16711680&t)*s+(16711680&e)*i&16711680)+((65280&t)*s+(65280&e)*i&65280)+((255&t)*s+(255&e)*i&255);return o},t.newTextField=function(e,i,s,o,r,n,a){var h=new egret.TextField;return h.text=e,h.bold=n,h.size=i,h.textColor=s,a?(h.x=(t.width-h.width)*o,h.y=(t.height-h.height)*r):(h.x=t.width*o-.5*h.width,h.y=t.height*r-.5*h.height),h},t}();__reflect(Util.prototype,"Util");var GameOver=function(t){function e(){var e=t.call(this)||this;return e.texts=[],e.retryButton=null,e.step=0,e.fadeInFrame=60,e.texts[0]=Util.newTextField("GAME OVER",Util.width/10,FONT_COLOR,.5,.4,!0,!1),e.texts[1]=Util.newTextField("SCORE : "+Score.I.point.toFixed(),Util.width/14,FONT_COLOR,.5,.5,!0,!1),SDK&&Score.bestScore<Score.I.point&&(Score.bestScore=Score.I.point,Social.setScore(Score.I.point),e.texts[2]=Util.newTextField("NEW RECORD!",Util.width/13,FONT_COLOR,.5,.4,!0,!1),egret.Tween.get(e.texts[2],{loop:!0}).to({alpha:0},500).to({alpha:1},500)),e.texts.forEach(function(t){GameObject.display.addChild(t)}),e}return __extends(e,t),e.prototype.onDestroy=function(){this.texts.forEach(function(t){GameObject.display.removeChild(t)}),this.texts=null},e.prototype.update=function(){if(this.step<this.fadeInFrame){this.step++;var t=this.step/this.fadeInFrame;this.texts[0].alpha=t,this.texts[1].alpha=t,this.step==this.fadeInFrame&&(this.retryButton=new Button("リトライ",Util.width/16,BACK_COLOR,.5,.65,.4,.1,FONT_COLOR,1,this.onTapRetry))}},e.prototype.onTapRetry=function(){GameObject.transit=Game.loadSceneGamePlay,this.destroy()},e}(GameObject);__reflect(GameOver.prototype,"GameOver");var Score=function(t){function e(){var i=t.call(this)||this;return i.point=0,i.text=null,i.textBest=null,e.I=i,i.point=0,i.text=Util.newTextField("0",Util.width/22,FONT_COLOR,.5,0,!0,!0),GameObject.display.addChild(i.text),i.textBest=Util.newTextField("BEST:"+e.bestScore,Util.width/22,FONT_COLOR,0,0,!0,!0),GameObject.display.addChild(i.textBest),i}return __extends(e,t),e.prototype.onDestroy=function(){GameObject.display.removeChild(this.text),this.text=null,GameObject.display.removeChild(this.textBest),this.textBest=null,e.I=null},e.prototype.update=function(){if(Player.I.state!=Player.I.stateNone){var t=Math.floor(.1*Player.I.px);this.point<t&&(this.point=t,this.text.text=""+this.point.toFixed(),e.bestScore<this.point&&(this.textBest.text="BEST:"+this.point.toFixed()))}},e.I=null,e.bestScore=0,e.bestRank=0,e}(GameObject);__reflect(Score.prototype,"Score");var StartMessage=function(t){function e(){var e=t.call(this)||this;return e.texts=[],e.texts[0]=Util.newTextField("サーカスジャンプ",Util.width/12,FONT_COLOR,.5,.3,!0,!1),e.texts[1]=Util.newTextField("タッチでフックして",Util.width/16,FONT_COLOR,.5,.5,!0,!1),e.texts[2]=Util.newTextField("振り子のようにジャンプ！",Util.width/16,FONT_COLOR,.5,.6,!0,!1),e.texts.forEach(function(t){GameObject.display.addChild(t)}),GameObject.display.once(egret.TouchEvent.TOUCH_BEGIN,e.tap,e),e}return __extends(e,t),e.prototype.onDestroy=function(){this.texts.forEach(function(t){GameObject.display.removeChild(t)}),this.texts=null},e.prototype.update=function(){},e.prototype.tap=function(t){Player.I.setStateFree(),this.destroy()},e}(GameObject);__reflect(StartMessage.prototype,"StartMessage");