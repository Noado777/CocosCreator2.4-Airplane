
const {ccclass, property} = cc._decorator;

@ccclass
export default class playerControl extends cc.Component {

    //子弹预设体的引用
    @property(cc.Prefab)
    bulletPrefab:cc.Prefab = null ;
    start () {
        //移动,用监听来实现
        /*
        let self = this ;
        this.node.on(cc.Node.EventType.TOUCH_MOVE,function(event){
            self.node   //function匿名函数里调不到this,因此要声明变量
        })              //以下是另一种匿名函数的写法，不需要 let self = this
        */
        this.node.on(cc.Node.EventType.TOUCH_MOVE,(event)=>{
            this.node.setPosition(event.getLocation().x,event.getLocation().y)
            this.node.x = event.getLocation().x ;
            this.node.y = event.getLocation().y ;
        });


        //攻击 发射子弹 计时器 放在start里面
        this.schedule(()=>{
            //创建子弹
            let bullet = cc.instantiate(this.bulletPrefab)
            //设置父物体
            bullet.setParent(cc.director.getScene());
            //设置子弹位置 子弹的x等于飞机的x 子弹的y在飞机上面一点点
            
            bullet.x = this.node.x ;
            bullet.y = this.node.y + 60 ;


        },0.5)//每隔0.5s执行一次

        //开启碰撞检测功能
        cc.director.getCollisionManager().enabled = true ;
        
    }


    update (dt) {


    }
}
