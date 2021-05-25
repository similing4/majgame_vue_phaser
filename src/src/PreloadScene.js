import Phaser from 'phaser';

export default class PreloadScene extends Phaser.Scene {
	preloadBar = null;
    init(data) {
        console.log(data);
    }
    preload(){
        this.add.sprite(0, 0, 'preloadScene_background').setOrigin(0, 0);
        this.add.sprite(239, 778, 'preloadScene_loadingBarBase').setOrigin(0, 0);
        this.preloadBar = this.add.sprite(248, 787, 'preloadScene_loadingBar').setOrigin(0, 0);
        this.add.sprite(233, 778, 'preloadScene_loadingFront').setOrigin(0, 0);
        this.load.on('progress', (value) => {
            this.preloadBar.setScale(value,1);
        });
        for(var i in window.currentScene.resource)
            this.load.image(i, window.currentScene.resource[i]);
    }
    async create(){
        this.preloadBar.cropEnabled = false;
        await window.loadFontPromise;
        this.scene.start('StageScene');
    }
};