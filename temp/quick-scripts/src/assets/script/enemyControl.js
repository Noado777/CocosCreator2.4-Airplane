"use strict";
cc._RF.push(module, '387f7JiFsZOy4demBvRoSmj', 'enemyControl');
// script/enemyControl.ts

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
var enemyControl = /** @class */ (function (_super) {
    __extends(enemyControl, _super);
    function enemyControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    enemyControl.prototype.start = function () {
    };
    enemyControl.prototype.update = function (dt) {
        //移动
        this.node.y -= 300 * dt;
        if (this.node.y < -852) {
            this.node.destroy();
        }
    };
    //死亡方法
    enemyControl.prototype.die = function () {
        var _this = this;
        //动态加载爆炸图片
        cc.loader.loadRes('enemy0_die', cc.SpriteFrame, function (err, res) {
            _this.node.getComponent(cc.Sprite).spriteFrame = res;
        });
        //0.2秒之后销毁
        this.scheduleOnce(function () {
            _this.node.destroy();
        }, 0.2);
    };
    enemyControl = __decorate([
        ccclass
    ], enemyControl);
    return enemyControl;
}(cc.Component));
exports.default = enemyControl;

cc._RF.pop();