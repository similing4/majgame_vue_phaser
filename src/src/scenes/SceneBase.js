export default class SceneBase {
	static resource = {};
	scene;
	resourcePosition = [];
	constructor(scene,res){
		this.scene = scene;
		this.resourcePosition = res.map((item)=>{
			if(item.type == 'image')
				this.addImage(item, item.x, item.y, item.key, item.ox ? item.ox : 0,item.oy ? item.oy : 0);
		});
	}
	addImage(item,x,y,key,ox,oy){
		this.resourcePosition.push({
			row: item,
			obj: this.scene.add.sprite(key, x, y).setOrigin(ox, oy)
		});
	}
	getItemByName(name){
		for(var i in this.resourcePosition)
			if(this.resourcePosition[i].row.name == name)
				return this.resourcePosition[i].obj;
		return null;
	}
};