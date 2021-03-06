import SceneBase from "./SceneBase.js";
export default class GameScene extends SceneBase {
	static resource = {
		'GameScene_background': require("../../assets/images/game/background.jpg"),
		'GameScene_backgroundBorder': require("../../assets/images/game/background_border.png"),
		'GameScene_center': require("../../assets/images/game/center.png"),
		'GameScene_centerHighLight': require("../../assets/images/game/center_highlight.png"),
		'GameScene_rizhiBar': require("../../assets/images/game/rizhi_bar.png"),
		'GameScene_rizhiBarLand': require("../../assets/images/game/rizhi_bar_land.png"),
		'GameScene_userBorder': require("../../assets/images/game/user_border.png"),
		'GameScene_chi': require("../../assets/images/game/opera/chi.png"),
		'GameScene_kang': require("../../assets/images/game/opera/kang.png"),
		'GameScene_peng': require("../../assets/images/game/opera/peng.png"),
		'GameScene_rizhi': require("../../assets/images/game/opera/rizhi.png"),
		'GameScene_rong': require("../../assets/images/game/opera/rong.png"),
		'GameScene_zimo': require("../../assets/images/game/opera/zimo.png"),
		'GameScene_settingBack': require("../../assets/images/game/opera/setting_back.png"),
		'GameScene_settingBackground': require("../../assets/images/game/opera/setting_background.png"),
		'GameScene_settingFace': require("../../assets/images/game/opera/setting_face.png"),
		'GameScene_settingYY': require("../../assets/images/game/opera/setting_mai.png"),
		'GameScene_settingSetting': require("../../assets/images/game/opera/setting_setting.png"),

		'Common_bottomB': require("../../assets/images/maj/bottom/e_mj_b_up.png"),
		'Common_leftB': require("../../assets/images/maj/left/e_mj_left.png"),
		'Common_rightB': require("../../assets/images/maj/right/e_mj_right.png"),
		'Common_upB': require("../../assets/images/maj/my/e_mj_up.png"),
		'Common_bottomM1': require("../../assets/images/maj/bottom/m1.png"),
		'Common_bottomM2': require("../../assets/images/maj/bottom/m2.png"),
		'Common_bottomM3': require("../../assets/images/maj/bottom/m3.png"),
		'Common_bottomM4': require("../../assets/images/maj/bottom/m4.png"),
		'Common_bottomM5': require("../../assets/images/maj/bottom/m5.png"),
		'Common_bottomM6': require("../../assets/images/maj/bottom/m6.png"),
		'Common_bottomM7': require("../../assets/images/maj/bottom/m7.png"),
		'Common_bottomM8': require("../../assets/images/maj/bottom/m8.png"),
		'Common_bottomM9': require("../../assets/images/maj/bottom/m9.png"),

		'Common_bottomP1': require("../../assets/images/maj/bottom/p1.png"),
		'Common_bottomP2': require("../../assets/images/maj/bottom/p2.png"),
		'Common_bottomP3': require("../../assets/images/maj/bottom/p3.png"),
		'Common_bottomP4': require("../../assets/images/maj/bottom/p4.png"),
		'Common_bottomP5': require("../../assets/images/maj/bottom/p5.png"),
		'Common_bottomP6': require("../../assets/images/maj/bottom/p6.png"),
		'Common_bottomP7': require("../../assets/images/maj/bottom/p7.png"),
		'Common_bottomP8': require("../../assets/images/maj/bottom/p8.png"),
		'Common_bottomP9': require("../../assets/images/maj/bottom/p9.png"),

		'Common_bottomS1': require("../../assets/images/maj/bottom/s1.png"),
		'Common_bottomS2': require("../../assets/images/maj/bottom/s2.png"),
		'Common_bottomS3': require("../../assets/images/maj/bottom/s3.png"),
		'Common_bottomS4': require("../../assets/images/maj/bottom/s4.png"),
		'Common_bottomS5': require("../../assets/images/maj/bottom/s5.png"),
		'Common_bottomS6': require("../../assets/images/maj/bottom/s6.png"),
		'Common_bottomS7': require("../../assets/images/maj/bottom/s7.png"),
		'Common_bottomS8': require("../../assets/images/maj/bottom/s8.png"),
		'Common_bottomS9': require("../../assets/images/maj/bottom/s9.png"),

		'Common_bottomTON': require("../../assets/images/maj/bottom/ton.png"),
		'Common_bottomNAN': require("../../assets/images/maj/bottom/nan.png"),
		'Common_bottomSHA': require("../../assets/images/maj/bottom/sha.png"),
		'Common_bottomPEI': require("../../assets/images/maj/bottom/pei.png"),
		'Common_bottomCHU': require("../../assets/images/maj/bottom/chu.png"),
		'Common_bottomHAT': require("../../assets/images/maj/bottom/hat.png"),
		'Common_bottomHAK': require("../../assets/images/maj/bottom/hak.png"),

		'Common_leftM1': require("../../assets/images/maj/left/m1.png"),
		'Common_leftM2': require("../../assets/images/maj/left/m2.png"),
		'Common_leftM3': require("../../assets/images/maj/left/m3.png"),
		'Common_leftM4': require("../../assets/images/maj/left/m4.png"),
		'Common_leftM5': require("../../assets/images/maj/left/m5.png"),
		'Common_leftM6': require("../../assets/images/maj/left/m6.png"),
		'Common_leftM7': require("../../assets/images/maj/left/m7.png"),
		'Common_leftM8': require("../../assets/images/maj/left/m8.png"),
		'Common_leftM9': require("../../assets/images/maj/left/m9.png"),

		'Common_leftP1': require("../../assets/images/maj/left/p1.png"),
		'Common_leftP2': require("../../assets/images/maj/left/p2.png"),
		'Common_leftP3': require("../../assets/images/maj/left/p3.png"),
		'Common_leftP4': require("../../assets/images/maj/left/p4.png"),
		'Common_leftP5': require("../../assets/images/maj/left/p5.png"),
		'Common_leftP6': require("../../assets/images/maj/left/p6.png"),
		'Common_leftP7': require("../../assets/images/maj/left/p7.png"),
		'Common_leftP8': require("../../assets/images/maj/left/p8.png"),
		'Common_leftP9': require("../../assets/images/maj/left/p9.png"),

		'Common_leftS1': require("../../assets/images/maj/left/s1.png"),
		'Common_leftS2': require("../../assets/images/maj/left/s2.png"),
		'Common_leftS3': require("../../assets/images/maj/left/s3.png"),
		'Common_leftS4': require("../../assets/images/maj/left/s4.png"),
		'Common_leftS5': require("../../assets/images/maj/left/s5.png"),
		'Common_leftS6': require("../../assets/images/maj/left/s6.png"),
		'Common_leftS7': require("../../assets/images/maj/left/s7.png"),
		'Common_leftS8': require("../../assets/images/maj/left/s8.png"),
		'Common_leftS9': require("../../assets/images/maj/left/s9.png"),

		'Common_leftTON': require("../../assets/images/maj/left/ton.png"),
		'Common_leftNAN': require("../../assets/images/maj/left/nan.png"),
		'Common_leftSHA': require("../../assets/images/maj/left/sha.png"),
		'Common_leftPEI': require("../../assets/images/maj/left/pei.png"),
		'Common_leftCHU': require("../../assets/images/maj/left/chu.png"),
		'Common_leftHAT': require("../../assets/images/maj/left/hat.png"),
		'Common_leftHAK': require("../../assets/images/maj/left/hak.png"),

		'Common_rightM1': require("../../assets/images/maj/right/m1.png"),
		'Common_rightM2': require("../../assets/images/maj/right/m2.png"),
		'Common_rightM3': require("../../assets/images/maj/right/m3.png"),
		'Common_rightM4': require("../../assets/images/maj/right/m4.png"),
		'Common_rightM5': require("../../assets/images/maj/right/m5.png"),
		'Common_rightM6': require("../../assets/images/maj/right/m6.png"),
		'Common_rightM7': require("../../assets/images/maj/right/m7.png"),
		'Common_rightM8': require("../../assets/images/maj/right/m8.png"),
		'Common_rightM9': require("../../assets/images/maj/right/m9.png"),

		'Common_rightP1': require("../../assets/images/maj/right/p1.png"),
		'Common_rightP2': require("../../assets/images/maj/right/p2.png"),
		'Common_rightP3': require("../../assets/images/maj/right/p3.png"),
		'Common_rightP4': require("../../assets/images/maj/right/p4.png"),
		'Common_rightP5': require("../../assets/images/maj/right/p5.png"),
		'Common_rightP6': require("../../assets/images/maj/right/p6.png"),
		'Common_rightP7': require("../../assets/images/maj/right/p7.png"),
		'Common_rightP8': require("../../assets/images/maj/right/p8.png"),
		'Common_rightP9': require("../../assets/images/maj/right/p9.png"),

		'Common_rightS1': require("../../assets/images/maj/right/s1.png"),
		'Common_rightS2': require("../../assets/images/maj/right/s2.png"),
		'Common_rightS3': require("../../assets/images/maj/right/s3.png"),
		'Common_rightS4': require("../../assets/images/maj/right/s4.png"),
		'Common_rightS5': require("../../assets/images/maj/right/s5.png"),
		'Common_rightS6': require("../../assets/images/maj/right/s6.png"),
		'Common_rightS7': require("../../assets/images/maj/right/s7.png"),
		'Common_rightS8': require("../../assets/images/maj/right/s8.png"),
		'Common_rightS9': require("../../assets/images/maj/right/s9.png"),

		'Common_rightTON': require("../../assets/images/maj/right/ton.png"),
		'Common_rightNAN': require("../../assets/images/maj/right/nan.png"),
		'Common_rightSHA': require("../../assets/images/maj/right/sha.png"),
		'Common_rightPEI': require("../../assets/images/maj/right/pei.png"),
		'Common_rightCHU': require("../../assets/images/maj/right/chu.png"),
		'Common_rightHAT': require("../../assets/images/maj/right/hat.png"),
		'Common_rightHAK': require("../../assets/images/maj/right/hak.png"),

		'Common_myM1': require("../../assets/images/maj/my/m1.png"),
		'Common_myM2': require("../../assets/images/maj/my/m2.png"),
		'Common_myM3': require("../../assets/images/maj/my/m3.png"),
		'Common_myM4': require("../../assets/images/maj/my/m4.png"),
		'Common_myM5': require("../../assets/images/maj/my/m5.png"),
		'Common_myM6': require("../../assets/images/maj/my/m6.png"),
		'Common_myM7': require("../../assets/images/maj/my/m7.png"),
		'Common_myM8': require("../../assets/images/maj/my/m8.png"),
		'Common_myM9': require("../../assets/images/maj/my/m9.png"),

		'Common_myP1': require("../../assets/images/maj/my/p1.png"),
		'Common_myP2': require("../../assets/images/maj/my/p2.png"),
		'Common_myP3': require("../../assets/images/maj/my/p3.png"),
		'Common_myP4': require("../../assets/images/maj/my/p4.png"),
		'Common_myP5': require("../../assets/images/maj/my/p5.png"),
		'Common_myP6': require("../../assets/images/maj/my/p6.png"),
		'Common_myP7': require("../../assets/images/maj/my/p7.png"),
		'Common_myP8': require("../../assets/images/maj/my/p8.png"),
		'Common_myP9': require("../../assets/images/maj/my/p9.png"),

		'Common_myS1': require("../../assets/images/maj/my/s1.png"),
		'Common_myS2': require("../../assets/images/maj/my/s2.png"),
		'Common_myS3': require("../../assets/images/maj/my/s3.png"),
		'Common_myS4': require("../../assets/images/maj/my/s4.png"),
		'Common_myS5': require("../../assets/images/maj/my/s5.png"),
		'Common_myS6': require("../../assets/images/maj/my/s6.png"),
		'Common_myS7': require("../../assets/images/maj/my/s7.png"),
		'Common_myS8': require("../../assets/images/maj/my/s8.png"),
		'Common_myS9': require("../../assets/images/maj/my/s9.png"),

		'Common_myTON': require("../../assets/images/maj/my/ton.png"),
		'Common_myNAN': require("../../assets/images/maj/my/nan.png"),
		'Common_mySHA': require("../../assets/images/maj/my/sha.png"),
		'Common_myPEI': require("../../assets/images/maj/my/pei.png"),
		'Common_myCHU': require("../../assets/images/maj/my/chu.png"),
		'Common_myHAT': require("../../assets/images/maj/my/hat.png"),
		'Common_myHAK': require("../../assets/images/maj/my/hak.png")
	};
	static resource_position = [
		{ type: 'image', x: 0, y: 0, key: 'GameScene_background' },
		{ type: 'image', x: 0, y: 0, key: 'GameScene_backgroundBorder' },
		{ type: 'image', x: 960, y: 495, key: 'GameScene_center', ox: 0.5, oy: 0.5 },
		{ type: 'image', x: 852, y: 495, key: 'GameScene_rizhiBar', name: "leftRiZhiBar", ox: 0.5, oy: 0.5 },
		{ type: 'image', x: 960, y: 390, key: 'GameScene_rizhiBarLand', name: "topRiZhiBar", ox: 0.5, oy: 0.5 },
		{ type: 'image', x: 1073, y: 495, key: 'GameScene_rizhiBar', name: "rightRiZhiBar", ox: 0.5, oy: 0.5 },
		{ type: 'image', x: 960, y: 606, key: 'GameScene_rizhiBarLand', name: "bottomRiZhiBar", ox: 0.5, oy: 0.5 },

		{ type: 'image', x: 58, y: 55, key: 'Common_bottomB' },
		{ type: 'image', x: 58 + 54, y: 55, key: 'Common_bottomB' },
		{ type: 'image', x: 58 + 54 * 2, y: 55, key: 'Common_bottomB' },
		{ type: 'image', x: 58 + 54 * 3, y: 55, key: 'Common_bottomB' },
		{ type: 'image', x: 58 + 54 * 4, y: 55, key: 'Common_bottomB' },
		{ type: 'image', x: 58, y: 33, key: 'Common_bottomM1', name: 'doraPointPai1' },
		{ type: 'image', x: 58 + 54, y: 33, key: 'Common_bottomB', name: 'doraPointPai2' },
		{ type: 'image', x: 58 + 54 * 2, y: 33, key: 'Common_bottomB', name: 'doraPointPai3' },
		{ type: 'image', x: 58 + 54 * 3, y: 33, key: 'Common_bottomB', name: 'doraPointPai4' },
		{ type: 'image', x: 58 + 54 * 4, y: 33, key: 'Common_bottomB', name: 'doraPointPai5' },

		{ type: 'text', x: 960, y: 430, text: '???', name: 'dongFengText', config: { fill: "#28b8a2", fontSize: 30 }, ox: 0.5, oy: 0.5, angle: 0 },
		{ type: 'text', x: 895, y: 495, text: '???', name: 'nanFengText', config: { fill: "#28b8a2", fontSize: 30 }, ox: 0.5, oy: 0.5, angle: Math.PI * 1.5 },
		{ type: 'text', x: 960, y: 560, text: '???', name: 'xiFengText', config: { fill: "#28b8a2", fontSize: 30 }, ox: 0.5, oy: 0.5, angle: Math.PI },
		{ type: 'text', x: 1025, y: 495, text: '???', name: 'beiFengText', config: { fill: "#28b8a2", fontSize: 30 }, ox: 0.5, oy: 0.5, angle: Math.PI / 2 },
		{ type: 'text', x: 960, y: 495, text: '00', name: 'timeUpText', config: { fontFamily: 'notoSerif', fill: "#FFFFFF", fontSize: 72, stroke: '#333', strokeThickness: 2 }, ox: 0.5, oy: 0.5 }
	];
	dongFengText = null; //??????????????????
	nanFengText = null;
	xiFengText = null;
	beiFengText = null;
	timeUpText = null; //???????????????
	leftRiZhiBar = null; //?????????
	topRiZhiBar = null;
	rightRiZhiBar = null;
	bottomRiZhiBar = null;
	doraPointPai = []; //?????????????????????

	constructor(scene) {
		super(scene, GameScene.resource_position);
		this.dongFengText = this.getItemByName('dongFengText');
		this.nanFengText = this.getItemByName('nanFengText');
		this.xiFengText = this.getItemByName('xiFengText');
		this.beiFengText = this.getItemByName('beiFengText');
		this.timeUpText = this.getItemByName('timeUpText');
		this.leftRiZhiBar = this.getItemByName('leftRiZhiBar');
		this.topRiZhiBar = this.getItemByName('topRiZhiBar');
		this.rightRiZhiBar = this.getItemByName('rightRiZhiBar');
		this.bottomRiZhiBar = this.getItemByName('bottomRiZhiBar');
		this.doraPointPai.push(this.getItemByName('doraPointPai1'));
		this.doraPointPai.push(this.getItemByName('doraPointPai2'));
		this.doraPointPai.push(this.getItemByName('doraPointPai3'));
		this.doraPointPai.push(this.getItemByName('doraPointPai4'));
		this.doraPointPai.push(this.getItemByName('doraPointPai5'));
	}
};