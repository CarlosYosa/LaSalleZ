(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,847,185,129],[513,516,150,193],[322,702,141,172],[0,0,718,514],[322,516,189,184],[0,516,320,329]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.escuadra = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.lapiz = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.libro = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.marco = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.paleta = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.tablon = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Figuras
	this.instance = new lib.escuadra();
	this.instance.parent = this;
	this.instance.setTransform(221,195,0.897,1.114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Texto
	this.text = new cjs.Text("Division ", "50px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 57;
	this.text.lineWidth = 221;
	this.text.parent = this;
	this.text.setTransform(643.5,479.7,1.19,0.951);

	this.text_1 = new cjs.Text("Multiplicación", "50px 'Times New Roman'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 57;
	this.text_1.lineWidth = 295;
	this.text_1.parent = this;
	this.text_1.setTransform(639.2,381,1.19,0.951);

	this.text_2 = new cjs.Text("Diferencia", "50px 'Times New Roman'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 57;
	this.text_2.lineWidth = 276;
	this.text_2.parent = this;
	this.text_2.setTransform(641.1,263.5,1.19,0.951);

	this.text_3 = new cjs.Text("Suma ", "50px 'Times New Roman'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 57;
	this.text_3.lineWidth = 190;
	this.text_3.parent = this;
	this.text_3.setTransform(650.4,172.6,1.19,0.951);

	this.text_4 = new cjs.Text("La Salle Zipaquira", "50px 'Times New Roman'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 57;
	this.text_4.lineWidth = 716;
	this.text_4.parent = this;
	this.text_4.setTransform(625.8,70.3,1.19,0.951);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	// Tablero
	this.instance_1 = new lib.paleta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(409.5,328.2,0.809,0.809,0,-15,165);

	this.instance_2 = new lib.libro();
	this.instance_2.parent = this;
	this.instance_2.setTransform(793,478);

	this.instance_3 = new lib.lapiz();
	this.instance_3.parent = this;
	this.instance_3.setTransform(887.3,351.3,1,1,-120);

	this.instance_4 = new lib.marco();
	this.instance_4.parent = this;
	this.instance_4.setTransform(5,0,1.775,1.398);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhnH5QgrjRAAkoQAAknArjRQArjRA8AAQA9AAArDRQArDRAAEnQAAEogrDRQgrDRg9AAQg8AAgrjRg");
	this.shape.setTransform(372.7,323.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Tablon
	this.instance_5 = new lib.tablon();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-151,-128,5.053,2.724);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(489,232,1616.8,896.3);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;