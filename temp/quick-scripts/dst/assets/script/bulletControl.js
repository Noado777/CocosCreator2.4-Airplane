
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/bulletControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxidWxsZXRDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQyxDQUFHLFNBQVM7QUFFaEQsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUEwQkM7UUF4QkcsV0FBSyxHQUFVLEdBQUcsQ0FBRSxDQUFFLGFBQWE7O0lBd0J2QyxDQUFDO0lBdkJHLDZCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUEsOEJBQU0sR0FBTixVQUFRLEVBQUU7UUFDUCwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUUsQ0FBRSxnQkFBZ0I7UUFDbEQsT0FBTztRQUNQLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFDO1lBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBRSxjQUFjO1NBQ3ZDO0lBQ0wsQ0FBQztJQUVELHdDQUFnQixHQUFoQixVQUFpQixLQUFLO1FBQ2xCLDRDQUE0QztRQUM1QyxJQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFDO1lBQ2QsYUFBYTtZQUNiLE1BQU07WUFDTixLQUFLLENBQUMsWUFBWSxDQUFDLHNCQUFZLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFHLDJDQUEyQztZQUNyRixNQUFNO1lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUF2QkQ7UUFEQyxRQUFRO2dEQUNXO0lBRkgsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQTBCakM7SUFBRCxvQkFBQztDQTFCRCxBQTBCQyxDQTFCMEMsRUFBRSxDQUFDLFNBQVMsR0EwQnREO2tCQTFCb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbmVteUNvbnRyb2wgZnJvbSBcIi4vZW5lbXlDb250cm9sXCI7ICAgLy/oh6rliqjlvaLmiJDnmoTku6PnoIFcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYnVsbGV0Q29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNwZWVkOm51bWJlciA9IDgwMCA7ICAvL+iuvue9ruWPr+S/ruaUuemdouadv+WPguaVsOiwg+iKglxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIC8v56e75Yqo77yM5LiA56eS6ZKf5Y+v5Lul56e75Yqo5Yiw5bGP5bmV5aSW55qE6YCf5bqm77yM5bGP5bmVODAwLlxyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQgKiBkdCA7ICAvL+i/memHjOaYrys9IOaQnumUmeWtkOW8ueWwseS4jeS8mumjnlxyXG4gICAgICAgIC8v5Ye65bGP5bmV6ZSA5q+BXHJcbiAgICAgICAgaWYodGhpcy5ub2RlLnkgPiA4NTIpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpOyAgLy/osIPnlKjov5nkuKrmlrnms5XlrZDlvLnnnqzpl7TplIDmr4FcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlcil7XHJcbiAgICAgICAgLy/lpoLmnpznorDliLDmlYzkurrvvIzplIDmr4Hoh6rlt7HvvIzmlYzkurrmrbvkuqHvvIjmo4DmtYvnorDmkp7vvIzlnKjnorDmkp7pnaLmnb/orr7nva50YWfmlbDlgLzvvIzmlYzkurrorr7nva7kuLox77yJXHJcbiAgICAgICAgaWYob3RoZXIudGFnID09IDEpe1xyXG4gICAgICAgICAgICAvL+WFiOmUgOavgeaVjOS6uu+8jOWGjemUgOavgeiHquW3sVxyXG4gICAgICAgICAgICAvL+mUgOavgeaVjOS6ulxyXG4gICAgICAgICAgICBvdGhlci5nZXRDb21wb25lbnQoZW5lbXlDb250cm9sKS5kaWUoKTsgICAvL+i/memHjG90aGVy5Luj6KGo5pWM5Lq655qE56Kw5pKe5ZmoICDojrflj5ZvdGhlcijmlYzkurop5LiK55qE57uE5Lu277yM6L+Z6YeM5ou/5LqG6ISa5pys57uE5Lu2XHJcbiAgICAgICAgICAgIC8v6ZSA5q+B6Ieq5bexXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==