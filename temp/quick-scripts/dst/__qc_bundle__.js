
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/bgControl');
require('./assets/script/bulletControl');
require('./assets/script/enemyControl');
require('./assets/script/enemyManager');
require('./assets/script/playerControl');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
