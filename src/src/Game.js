import Phaser from 'phaser';
import BootScene from "BootScene.js"
import PreloadScene from "PreloadScene.js"
import StageScene from "StageScene.js"
class Game extends Phaser.Game {
    constructor() {
        super(window.config);
        this.scene.add("BootScene", BootScene);
        this.scene.add("PreloadScene", PreloadScene);
        this.scene.add("StageScene", StageScene);
        this.scene.start("BootScene");
    };
}