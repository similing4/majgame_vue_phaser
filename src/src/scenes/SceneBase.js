export default class SceneBase {
	static resource = {};
	scene;
	resourcePosition = [];
	constructor(scene, res) {
		this.scene = scene;
		res.map((item) => {
			if (item.type == 'image')
				this.addImage(item, item.x, item.y, item.key, item.ox ? item.ox : 0, item.oy ? item.oy : 0, item.angle ? item.angle : 0);
			else if (item.type == 'text')
				this.addText(item, item.x, item.y, item.text, item.config, item.ox ? item.ox : 0, item.oy ? item.oy : 0, item.angle ? item.angle : 0);
		});
	}
	onUpdate() {;
	}
	onRender() {;
	}
	addImage(item, x, y, key, ox, oy, angle) {
		this.resourcePosition.push({
			row: item,
			obj: this.scene.add.sprite(x, y, key).setOrigin(ox, oy).setRotation(angle)
		});
	}
	addText(item, x, y, text, config, ox, oy, angle) {
		var conf = { fontFamily: 'cangershuyuanti' };
		Object.assign(conf, config);
		this.resourcePosition.push({
			row: item,
			obj: this.scene.add.text(x, y, text, conf).setOrigin(ox, oy).setRotation(angle)
		});
	}
	getItemByName(name) {
		for (var i in this.resourcePosition)
			if (this.resourcePosition[i].row.name == name)
				return this.resourcePosition[i].obj;
		return null;
	}
	goScene(sceneClass) {
		window.currentScene = sceneClass;
		this.scene.scene.start('PreloadScene');
	}
};