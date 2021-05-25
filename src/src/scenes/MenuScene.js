import SceneBase from "./SceneBase.js";
export default class MenuScene extends SceneBase {
	static resource = {
        'GamePreloadScene_background': require("../assets/images/game/loading.jpg"),
        'MenuScene_background': require("../assets/images/main/background/menu_background.jpg"),
        'MenuScene_charactorChangeCardBar': require("../assets/images/main/btn/charactor_change_card_bar.png"),
        'MenuScene_activityBtn': require("../assets/images/main/btn/menu_activity_btn.png"),
        'MenuScene_bottomBar': require("../assets/images/main/btn/menu_bottom_bar.png"),
        'MenuScene_settingBtn': require("../assets/images/main/btn/menu_setting_btn.png"),
        'MenuScene_shopBtn': require("../assets/images/main/btn/menu_shop_btn.png"),
        'MenuScene_topBar': require("../assets/images/main/btn/menu_top_bar.png"),
        'MenuScene_zhanjiBtn': require("../assets/images/main/btn/menu_zhanji_btn.png"),
        'MenuScene_Message': require("../assets/images/main/btn/message.png"),
        'MenuScene_moneyBar': require("../assets/images/main/btn/money_bar.png"),
        'MenuScene_roomCreateBtn': require("../assets/images/main/btn/room_create_btn.png"),
        'MenuScene_roomInBtn': require("../assets/images/main/btn/room_in_btn.png"),
        'MenuScene_userIcon': require("../assets/images/main/user/user_icon.png"),
        'MenuScene_userBar': require("../assets/images/main/btn/user_bar.png")
	};
	static resource_position = [
		{type:'image',x:0,y:0,key:'MenuScene_background'},
		{type:'image',x:0,y:0,key:'MenuScene_topBar'},
		{type:'image',x:0,y:944,key:'MenuScene_bottomBar'},
		{type:'image',x:1379,y:47,key:'MenuScene_charactorChangeCardBar',name:'charactorChangeCardBar'},
		{type:'image',x:358,y:960,key:'MenuScene_activityBtn'},
		{type:'image',x:716,y:960,key:'MenuScene_settingBtn'},
		{type:'image',x:1074,y:960,key:'MenuScene_shopBtn'},
		{type:'image',x:1432,y:960,key:'MenuScene_zhanjiBtn'},
		{type:'image',x:1770,y:16,key:'MenuScene_Message'},
		{type:'image',x:988,y:47,key:'MenuScene_moneyBar',name:'monenyBar'},
		{type:'image',x:43,y:17,key:'MenuScene_userIcon'},
		{type:'image',x:36,y:10,key:'MenuScene_userBar'},
		{type:'image',x:656,y:300,key:'MenuScene_roomCreateBtn',name:'createRoomBtn'},
		{type:'image',x:656,y:600,key:'MenuScene_roomInBtn',name:'joinRoomBtn'}
	];

    usernameText = null; //用户名文本
    userIdText = null; //用户ID文本
    userMoneyText = null; //用户钱数文本
    monenyBar = null; //用户钱数区域按钮
    charactorChangeCardBar = null; //换角色卡区域按钮
    createRoomBtn = null; //创建房间按钮
    joinRoomBtn = null; //加入房间按钮
	constructor(scene){
		super(scene,resource_position);
        this.charactorChangeCardBar = this.getItemByName('charactorChangeCardBar');
        this.monenyBar = this.getItemByName('monenyBar');
        this.createRoomBtn = this.getItemByName('createRoomBtn');
        this.joinRoomBtn = this.getItemByName('joinRoomBtn');
        
        this.usernameText = this.add.text(200, 39, '滑稽保命', {
            fontFamily: 'cangershuyuanti',
            fill: "#FFFFFF",
            fontSize: 30,
            stroke: '#e23',
            strokeThickness: 2
        });
        this.userIdText = this.add.text(240, 78, '1', {
            fontFamily: 'notoSerif',
            fill: "#3fff22",
            fontSize: 35,
            stroke: '#333',
            strokeThickness: 5
        });
        this.userMoneyText = this.add.text(1065, 57, '0', {
            fontFamily: 'notoSerif',
            fill: "#FFFFFF",
            fontSize: 36,
            stroke: '#333',
            strokeThickness: 5
        });
        this.userChangeCardNumText = this.add.text(1455, 57, '0', {
            fontFamily: 'notoSerif',
            fill: "#FFFFFF",
            fontSize: 36,
            stroke: '#333',
            strokeThickness: 5
        });


        this.sakuraFall = new Sakura(this,Config.initGameConf.scale.width,Config.initGameConf.scale.height);
        this.sakuraFall.createParticles();
        console.log(Config);

        this.monenyBar.setInteractive();
        this.charactorChangeCardBar.setInteractive();
        this.createRoomBtn.setInteractive();
        this.joinRoomBtn.setInteractive();
        this.monenyBar.on('pointerdown', (e)=>{this.onMoneyBarClick(e)});
        this.charactorChangeCardBar.on('pointerdown', (e)=>{this.onCharactorChangeCardBarClick(e)});
        this.createRoomBtn.on('pointerdown', (e)=>{this.onCreateRoomBtnClick(e)});
        this.joinRoomBtn.on('pointerdown', (e)=>{this.onJoinRoomBtnClick(e)});
	}
};