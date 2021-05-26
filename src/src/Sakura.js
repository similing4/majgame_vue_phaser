export default class Sakura {
    scene;
    width;
    height;
    constructor(scene, w, h) {
        this.scene = scene;
        this.width = (w ? w : window.config.scale.width);
        this.height = (h ? h : window.config.scale.height);
    }
    //随机选择列表中的一项
    random_off(list) {
        var i = this.random_between(0, list.length - 1);
        return list[i];
    }
    //生成随机数
    random_between(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    createParticles() {
        //创建动画
        var particles = this.scene.add.particles('sakura_leaf');
        //随机选择-1,1中的一个作为速度方向
        var side = this.random_off([-1, 1]);
        //从-高度/4到高度/4随机获取一个数作为高度
        var h_offset = this.random_between(-(this.height / 4), this.height / 4);
        particles.createEmitter({
            alpha: { start: 1, end: 0 }, //透明度从1到0
            scale: 1.2, //缩放比例是1.2
            speedX: -160 * side * 2, //飘动速度为160
            accelerationX: { min: 10 * side, max: 25 * side }, //横向的加速度
            accelerationY: { min: 5, max: 20 }, //纵向的加速度
            angle: { min: -85, max: -95 },
            rotate: { min: -180, max: 180 },
            lifespan: { min: 5000, max: 9000 },
            frequency: 600,
            x: this.width / 2 + (this.width / 2 * 1.04 * side),
            y: {
                min: -this.height / 5 + h_offset,
                max: this.height / 5 * 4 + h_offset
            }
        });
        return particles;
    }
}