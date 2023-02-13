
const {ccclass, property} = cc._decorator;

@ccclass
export default class bgControl extends cc.Component {


    start () {

    }

    
    update (dt) {
        //移动
        //遍历子物体
        for (let bgNode of this.node.children){
            //移动，更改坐标
            //bgNode.y -= 50 ; //每帧移动50像素，下面要把每帧换成每秒
            bgNode.y -= 80*dt ; //dt就是每秒有dt桢的意思
            if(bgNode.y < -852){  //遍历中那个y小于-852的子物体，移到上面去，2倍自身高度
                bgNode.y += 852 *2 ;//这行代码比 bgNode.y = 852 衔接顺畅，后者衔接处有一根细线

            } 


        }
    }
}

