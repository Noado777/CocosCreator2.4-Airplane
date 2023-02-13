
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/playerControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxwbGF5ZXJDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBNENDO1FBMUNHLFVBQVU7UUFFVixrQkFBWSxHQUFhLElBQUksQ0FBRTs7SUF3Q25DLENBQUM7SUF2Q0csNkJBQUssR0FBTDtRQUFBLGlCQWdDQztRQS9CRyxXQUFXO1FBQ1g7Ozs7O1VBS0U7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUMsVUFBQyxLQUFLO1lBQzVDLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2xFLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUU7WUFDckMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBRTtRQUN6QyxDQUFDLENBQUMsQ0FBQztRQUdILHVCQUF1QjtRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsTUFBTTtZQUNOLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQzlDLE9BQU87WUFDUCxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUN6QyxnQ0FBZ0M7WUFFaEMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBRTtZQUN4QixNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBRTtRQUdqQyxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQSxZQUFZO1FBRWxCLFVBQVU7UUFDVixFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBRTtJQUV0RCxDQUFDO0lBR0QsOEJBQU0sR0FBTixVQUFRLEVBQUU7SUFHVixDQUFDO0lBdkNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ1c7SUFKZCxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBNENqQztJQUFELG9CQUFDO0NBNUNELEFBNENDLENBNUMwQyxFQUFFLENBQUMsU0FBUyxHQTRDdEQ7a0JBNUNvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGxheWVyQ29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy/lrZDlvLnpooTorr7kvZPnmoTlvJXnlKhcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBidWxsZXRQcmVmYWI6Y2MuUHJlZmFiID0gbnVsbCA7XHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy/np7vliqgs55So55uR5ZCs5p2l5a6e546wXHJcbiAgICAgICAgLypcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXMgO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgc2VsZi5ub2RlICAgLy9mdW5jdGlvbuWMv+WQjeWHveaVsOmHjOiwg+S4jeWIsHRoaXMs5Zug5q2k6KaB5aOw5piO5Y+Y6YePXHJcbiAgICAgICAgfSkgICAgICAgICAgICAgIC8v5Lul5LiL5piv5Y+m5LiA56eN5Yy/5ZCN5Ye95pWw55qE5YaZ5rOV77yM5LiN6ZyA6KaBIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICAgICovXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oZXZlbnQuZ2V0TG9jYXRpb24oKS54LGV2ZW50LmdldExvY2F0aW9uKCkueSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggPSBldmVudC5nZXRMb2NhdGlvbigpLnggO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IGV2ZW50LmdldExvY2F0aW9uKCkueSA7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvL+aUu+WHuyDlj5HlsITlrZDlvLkg6K6h5pe25ZmoIOaUvuWcqHN0YXJ06YeM6Z2iXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKT0+e1xyXG4gICAgICAgICAgICAvL+WIm+W7uuWtkOW8uVxyXG4gICAgICAgICAgICBsZXQgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXRQcmVmYWIpXHJcbiAgICAgICAgICAgIC8v6K6+572u54i254mp5L2TXHJcbiAgICAgICAgICAgIGJ1bGxldC5zZXRQYXJlbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSk7XHJcbiAgICAgICAgICAgIC8v6K6+572u5a2Q5by55L2N572uIOWtkOW8ueeahHjnrYnkuo7po57mnLrnmoR4IOWtkOW8ueeahHnlnKjpo57mnLrkuIrpnaLkuIDngrnngrlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJ1bGxldC54ID0gdGhpcy5ub2RlLnggO1xyXG4gICAgICAgICAgICBidWxsZXQueSA9IHRoaXMubm9kZS55ICsgNjAgO1xyXG5cclxuXHJcbiAgICAgICAgfSwwLjUpLy/mr4/pmpQwLjVz5omn6KGM5LiA5qyhXHJcblxyXG4gICAgICAgIC8v5byA5ZCv56Kw5pKe5qOA5rWL5Yqf6IO9XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlIDtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIl19