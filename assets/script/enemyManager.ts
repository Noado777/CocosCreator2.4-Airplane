
const {ccclass, property} = cc._decorator;

@ccclass
export default class enemyManager extends cc.Component {
    //敌机预设体
    @property(cc.Prefab)
    enemyPrefab:cc.Prefab = null ;
    start () {
        //每隔2s创建一个敌机
        this.schedule(()=>{
            //创建敌机
            let enemy = cc.instantiate(this.enemyPrefab)
            //别忘了设置父节点
            enemy.setParent(cc.director.getScene());
            enemy.y = this.node.y ;
            enemy.x = Math.random() * 400 + 20 ;
        },2,20)
    }

    update (dt) {

    }
}
