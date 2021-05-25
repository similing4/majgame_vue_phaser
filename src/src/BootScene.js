import Phaser from 'phaser';
import Config from '../config/gameconf.js';

export default class BootScene extends Phaser.Scene {
    init(){
        this.scale.forceLandscape = true;
        this.load.crossOrigin = 'anonymous';
    }

    preload() {
        this.load.image('sakura_leaf',require('../assets/images/sakura_leaf.png'));
        this.load.image('preloadScene_loadingBarBase', require('../assets/images/main/background/loading_bar_base.png'));
        this.load.image('preloadScene_loadingBar', require('../assets/images/main/background/loading_bar.png'));
        this.load.image('preloadScene_loadingFront', require('../assets/images/main/background/loading_front.png'));
        this.load.image('preloadScene_background', require("../assets/images/main/background/background.jpg"));
    }

    create() {
        this.scene.start('PreloadScene');
    }
}