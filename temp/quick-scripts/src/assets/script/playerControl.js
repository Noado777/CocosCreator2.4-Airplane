"use strict";
cc._RF.push(module, '0aab85fS1lDwbAsoPIIqRh+', 'playerControl');
// script/playerControl.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var playerControl = /** @class */ (function (_super) {
    __extends(playerControl, _super);
    function playerControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //子弹预设体的引用
        _this.bulletPrefab = null;
        return _this;
    }
    playerControl.prototype.start = function () {
        var _this = this;
        //移动,用监听来实现
        /*
        let self = this ;
        this.node.on(cc.Node.EventType.TOUCH_MOVE,function(event){
            self.node   //function匿名函数里调不到this,因此要声明变量
        })              //以下是另一种匿名函数的写法，不需要 let self = this
        */
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            _this.node.setPosition(event.getLocation().x, event.getLocation().y);
            _this.node.x = event.getLocation().x;
            _this.node.y = event.getLocation().y;
        });
        //攻击 发射子弹 计时器 放在start里面
        this.schedule(function () {
            //创建子弹
            var bullet = cc.instantiate(_this.bulletPrefab);
            //设置父物体
            bullet.setParent(cc.director.getScene());
            //设置子弹位置 子弹的x等于飞机的x 子弹的y在飞机上面一点点
            bullet.x = _this.node.x;
            bullet.y = _this.node.y + 60;
        }, 0.5); //每隔0.5s执行一次
        //开启碰撞检测功能
        cc.director.getCollisionManager().enabled = true;
    };
    playerControl.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Prefab)
    ], playerControl.prototype, "bulletPrefab", void 0);
    playerControl = __decorate([
        ccclass
    ], playerControl);
    return playerControl;
}(cc.Component));
exports.default = playerControl;

cc._RF.pop();