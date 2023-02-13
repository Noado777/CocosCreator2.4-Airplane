"use strict";
cc._RF.push(module, '00263OFXOJP47LQgmIBsKRg', 'bgControl');
// script/bgControl.ts

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
var bgControl = /** @class */ (function (_super) {
    __extends(bgControl, _super);
    function bgControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    bgControl.prototype.start = function () {
    };
    bgControl.prototype.update = function (dt) {
        //移动
        //遍历子物体
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var bgNode = _a[_i];
            //移动，更改坐标
            //bgNode.y -= 50 ; //每帧移动50像素，下面要把每帧换成每秒
            bgNode.y -= 80 * dt; //dt就是每秒有dt桢的意思
            if (bgNode.y < -852) { //遍历中那个y小于-852的子物体，移到上面去，2倍自身高度
                bgNode.y += 852 * 2; //这行代码比 bgNode.y = 852 衔接顺畅，后者衔接处有一根细线
            }
        }
    };
    bgControl = __decorate([
        ccclass
    ], bgControl);
    return bgControl;
}(cc.Component));
exports.default = bgControl;

cc._RF.pop();