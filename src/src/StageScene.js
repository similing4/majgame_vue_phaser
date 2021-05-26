import Phaser from 'phaser';

export default class StageScene extends Phaser.Scene {
    sceneObject;
    create() {
        this.sceneObject = new window.currentScene(this);
    }
    update(){
        this.sceneObject.onUpdate();
    }
    render(){
        this.sceneObject.onRender();
    }
};