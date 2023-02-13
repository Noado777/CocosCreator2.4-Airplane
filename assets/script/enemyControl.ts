
const {ccclass, property} = cc._decorator;

@ccclass
export default class enemyControl extends cc.Component {




    start () {
        
    }

    update (dt) {
        //移动
        this.node.y -= 300 * dt ;
        if(this.node.y < -852){
            this.node.destroy();

        }
    }

    //死亡方法
    die(){
        //动态加载爆炸图片
        cc.loader.loadRes('enemy0_die',cc.SpriteFrame,(err,res)=>{
            this.node.getComponent(cc.Sprite).spriteFrame = res ;
            
        })
        //0.2秒之后销毁
        this.scheduleOnce(()=>{
            this.node.destroy();
        },0.2)
        
    }
}
