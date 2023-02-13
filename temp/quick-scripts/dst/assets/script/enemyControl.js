
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemyControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteUNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFBdEQ7O0lBK0JBLENBQUM7SUExQkcsNEJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUk7UUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFFO1FBQ3pCLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUM7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUV2QjtJQUNMLENBQUM7SUFFRCxNQUFNO0lBQ04sMEJBQUcsR0FBSDtRQUFBLGlCQVdDO1FBVkcsVUFBVTtRQUNWLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBQyxFQUFFLENBQUMsV0FBVyxFQUFDLFVBQUMsR0FBRyxFQUFDLEdBQUc7WUFDbEQsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUU7UUFFekQsQ0FBQyxDQUFDLENBQUE7UUFDRixVQUFVO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRVYsQ0FBQztJQTlCZ0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQStCaEM7SUFBRCxtQkFBQztDQS9CRCxBQStCQyxDQS9CeUMsRUFBRSxDQUFDLFNBQVMsR0ErQnJEO2tCQS9Cb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGVuZW15Q29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICAvL+enu+WKqFxyXG4gICAgICAgIHRoaXMubm9kZS55IC09IDMwMCAqIGR0IDtcclxuICAgICAgICBpZih0aGlzLm5vZGUueSA8IC04NTIpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/mrbvkuqHmlrnms5VcclxuICAgIGRpZSgpe1xyXG4gICAgICAgIC8v5Yqo5oCB5Yqg6L2954iG54K45Zu+54mHXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2VuZW15MF9kaWUnLGNjLlNwcml0ZUZyYW1lLChlcnIscmVzKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSByZXMgO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vMC4y56eS5LmL5ZCO6ZSA5q+BXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9LDAuMilcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=