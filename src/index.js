import "./index.less";
import Game from "./src/Game.js";
import MenuScene from "./src/scenes/MenuScene.js";
const font = require('./assets/font/cangershuyuanti.ttf');
const font2 = require('./assets/font/notoSerif_bold.ttf');
var fontFace = new FontFace("cangershuyuanti","local('cangershuyuanti'),url("+font+") format('ttf'),url("+font+")");
var fontFace2 = new FontFace("notoSerif_bold","local('notoSerif_bold'),url("+font2+") format('ttf'),url("+font2+")");
window.loadFontPromise = Promise.all([
    fontFace.load(),
    fontFace2.load()
]);
window.loadFontPromise.then((arr) => {
    for(var i in arr)
        document.fonts.add(arr[i]);
});
window.config = {
    scale: {
        parent: 'game-area',
        mode: Phaser.Scale.FIT,
        width: 1920,
        height: 1080
    },
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    type: Phaser.AUTO,
    title: '心语日麻',
    localStorageName: '心语日麻'
};
window.currentScene = MenuScene;
window.game = new Game();