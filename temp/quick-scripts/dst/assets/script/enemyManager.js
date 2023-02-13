
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemyManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba21cMsL89HCZSqV5L3UVEf', 'enemyManager');
// script/enemyManager.ts

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
var enemyManager = /** @class */ (function (_super) {
    __extends(enemyManager, _super);
    function enemyManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //敌机预设体
        _this.enemyPrefab = null;
        return _this;
    }
    enemyManager.prototype.start = function () {
        var _this = this;
        //每隔2s创建一个敌机
        this.schedule(function () {
            //创建敌机
            var enemy = cc.instantiate(_this.enemyPrefab);
            //别忘了设置父节点
            enemy.setParent(cc.director.getScene());
            enemy.y = _this.node.y;
            enemy.x = Math.random() * 400 + 20;
        }, 2, 20);
    };
    enemyManager.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Prefab)
    ], enemyManager.prototype, "enemyPrefab", void 0);
    enemyManager = __decorate([
        ccclass
    ], enemyManager);
    return enemyManager;
}(cc.Component));
exports.default = enemyManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFtQkM7UUFsQkcsT0FBTztRQUVQLGlCQUFXLEdBQWEsSUFBSSxDQUFFOztJQWdCbEMsQ0FBQztJQWZHLDRCQUFLLEdBQUw7UUFBQSxpQkFVQztRQVRHLFlBQVk7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsTUFBTTtZQUNOLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQzVDLFVBQVU7WUFDVixLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUN4QyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFFO1lBQ3ZCLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUU7UUFDeEMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQTtJQUNYLENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQVEsRUFBRTtJQUVWLENBQUM7SUFmRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNVO0lBSGIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQW1CaEM7SUFBRCxtQkFBQztDQW5CRCxBQW1CQyxDQW5CeUMsRUFBRSxDQUFDLFNBQVMsR0FtQnJEO2tCQW5Cb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGVuZW15TWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICAvL+aVjOacuumihOiuvuS9k1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGVuZW15UHJlZmFiOmNjLlByZWZhYiA9IG51bGwgO1xyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8v5q+P6ZqUMnPliJvlu7rkuIDkuKrmlYzmnLpcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpPT57XHJcbiAgICAgICAgICAgIC8v5Yib5bu65pWM5py6XHJcbiAgICAgICAgICAgIGxldCBlbmVteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZW5lbXlQcmVmYWIpXHJcbiAgICAgICAgICAgIC8v5Yir5b+Y5LqG6K6+572u54i26IqC54K5XHJcbiAgICAgICAgICAgIGVuZW15LnNldFBhcmVudChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpKTtcclxuICAgICAgICAgICAgZW5lbXkueSA9IHRoaXMubm9kZS55IDtcclxuICAgICAgICAgICAgZW5lbXkueCA9IE1hdGgucmFuZG9tKCkgKiA0MDAgKyAyMCA7XHJcbiAgICAgICAgfSwyLDIwKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuIl19