import enemyControl from "./enemyControl";   //自动形成的代码

const {ccclass, property} = cc._decorator;

@ccclass
export default class bulletControl extends cc.Component {
    @property
    speed:number = 800 ;  //设置可修改面板参数调节
    start () {

    }

     update (dt) {
        //移动，一秒钟可以移动到屏幕外的速度，屏幕800.
        this.node.y += this.speed * dt ;  //这里是+= 搞错子弹就不会飞
        //出屏幕销毁
        if(this.node.y > 852){
            this.node.destroy();  //调用这个方法子弹瞬间销毁
        }
    }

    onCollisionEnter(other){
        //如果碰到敌人，销毁自己，敌人死亡（检测碰撞，在碰撞面板设置tag数值，敌人设置为1）
        if(other.tag == 1){
            //先销毁敌人，再销毁自己
            //销毁敌人
            other.getComponent(enemyControl).die();   //这里other代表敌人的碰撞器  获取other(敌人)上的组件，这里拿了脚本组件
            //销毁自己
            this.node.destroy();
        }
    }
}
