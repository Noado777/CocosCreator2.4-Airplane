
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/bgControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiZ0NvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBdUMsNkJBQVk7SUFBbkQ7O0lBdUJBLENBQUM7SUFwQkcseUJBQUssR0FBTDtJQUVBLENBQUM7SUFHRCwwQkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUk7UUFDSixPQUFPO1FBQ1AsS0FBbUIsVUFBa0IsRUFBbEIsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBQztZQUFqQyxJQUFJLE1BQU0sU0FBQTtZQUNYLFNBQVM7WUFDVCx3Q0FBd0M7WUFDeEMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUMsRUFBRSxDQUFFLENBQUMsZUFBZTtZQUNuQyxJQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsRUFBRywrQkFBK0I7Z0JBQ2pELE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFFLENBQUMsQ0FBRSxDQUFBLHNDQUFzQzthQUU3RDtTQUdKO0lBQ0wsQ0FBQztJQXRCZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXVCN0I7SUFBRCxnQkFBQztDQXZCRCxBQXVCQyxDQXZCc0MsRUFBRSxDQUFDLFNBQVMsR0F1QmxEO2tCQXZCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJnQ29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgLy/np7vliqhcclxuICAgICAgICAvL+mBjeWOhuWtkOeJqeS9k1xyXG4gICAgICAgIGZvciAobGV0IGJnTm9kZSBvZiB0aGlzLm5vZGUuY2hpbGRyZW4pe1xyXG4gICAgICAgICAgICAvL+enu+WKqO+8jOabtOaUueWdkOagh1xyXG4gICAgICAgICAgICAvL2JnTm9kZS55IC09IDUwIDsgLy/mr4/luKfnp7vliqg1MOWDj+e0oO+8jOS4i+mdouimgeaKiuavj+W4p+aNouaIkOavj+enklxyXG4gICAgICAgICAgICBiZ05vZGUueSAtPSA4MCpkdCA7IC8vZHTlsLHmmK/mr4/np5LmnIlkdOahoueahOaEj+aAnVxyXG4gICAgICAgICAgICBpZihiZ05vZGUueSA8IC04NTIpeyAgLy/pgY3ljobkuK3pgqPkuKp55bCP5LqOLTg1MueahOWtkOeJqeS9k++8jOenu+WIsOS4iumdouWOu++8jDLlgI3oh6rouqvpq5jluqZcclxuICAgICAgICAgICAgICAgIGJnTm9kZS55ICs9IDg1MiAqMiA7Ly/ov5nooYzku6PnoIHmr5QgYmdOb2RlLnkgPSA4NTIg6KGU5o6l6aG655WF77yM5ZCO6ICF6KGU5o6l5aSE5pyJ5LiA5qC557uG57q/XHJcblxyXG4gICAgICAgICAgICB9IFxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=