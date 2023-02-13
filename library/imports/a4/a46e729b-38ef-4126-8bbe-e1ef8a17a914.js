"use strict";
cc._RF.push(module, 'a46e7KbOO9BJou+4e+KF6kU', 'bulletControl');
// script/bulletControl.ts

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
var enemyControl_1 = require("./enemyControl"); //自动形成的代码
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bulletControl = /** @class */ (function (_super) {
    __extends(bulletControl, _super);
    function bulletControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 800; //设置可修改面板参数调节
        return _this;
    }
    bulletControl.prototype.start = function () {
    };
    bulletControl.prototype.update = function (dt) {
        //移动，一秒钟可以移动到屏幕外的速度，屏幕800.
        this.node.y += this.speed * dt; //这里是+= 搞错子弹就不会飞
        //出屏幕销毁
        if (this.node.y > 852) {
            this.node.destroy(); //调用这个方法子弹瞬间销毁
        }
    };
    bulletControl.prototype.onCollisionEnter = function (other) {
        //如果碰到敌人，销毁自己，敌人死亡（检测碰撞，在碰撞面板设置tag数值，敌人设置为1）
        if (other.tag == 1) {
            //先销毁敌人，再销毁自己
            //销毁敌人
            other.getComponent(enemyControl_1.default).die(); //这里other代表敌人的碰撞器  获取other(敌人)上的组件，这里拿了脚本组件
            //销毁自己
            this.node.destroy();
        }
    };
    __decorate([
        property
    ], bulletControl.prototype, "speed", void 0);
    bulletControl = __decorate([
        ccclass
    ], bulletControl);
    return bulletControl;
}(cc.Component));
exports.default = bulletControl;

cc._RF.pop();