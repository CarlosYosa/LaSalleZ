(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"burbujas_atlas_", frames: [[0,122,58,54],[60,123,56,51],[63,0,59,60],[0,61,60,59],[62,62,59,59],[0,0,61,59]]}
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



(lib._1 = function() {
	this.spriteSheet = ss["burbujas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["burbujas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["burbujas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["burbujas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["burbujas_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["burbujas_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.burbuja1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-106,-26,0.965,0.944);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.burbuja1, new cjs.Rectangle(-106,-26,56,51), null);


(lib.burbujas_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.bur1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(1);
		}
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// burbujas
	this.bur1 = new lib.burbuja1();
	this.bur1.parent = this;
	this.bur1.setTransform(-0.5,-0.2,1,1,0,0,0,-78,-0.5);

	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-29,-25);

	this.instance_1 = new lib._3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-30,-32);

	this.instance_2 = new lib._4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-36,-31);

	this.instance_3 = new lib._5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-27,-29);

	this.instance_4 = new lib._6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-32,-29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bur1}]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[]},2).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-25.7,56,51);


// stage content:
(lib.burbujas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.num1.visible = true; this.num11.visible = false; this.numero1.visible = true;
		this.num2.visible = true; this.num22.visible = false; this.numero2.visible = true;
		
		
		
		this.num1.addEventListener("click", fl_MouseClickHandler.bind(this));
		function fl_MouseClickHandler() {
			this.num1.visible = false;
			this.b1.gotoAndPlay(1);
			this.num11.visible = true;
			this.numero1.visible = false; }
		this.b1.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		function fl_MouseClickHandler_2() {
			 this.b1.gotoAndPlay(1);;
			 this.num1.visible = false;
			 this.num11.visible = true;
			 this.numero1.visible = false; }
		
		
		this.num2.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		function fl_MouseClickHandler_3() {
			this.num2.visible = false;
			this.b2.gotoAndPlay(1);
			this.num22.visible = true;
			this.numero2.visible = false; }
		this.b2.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		function fl_MouseClickHandler_4() {
			 this.b2.gotoAndPlay(1);;
			 this.num2.visible = false;
			 this.num22.visible = true;
			 this.numero2.visible = false; }
		
		this.num3.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		function fl_MouseClickHandler_5() {
			this.num3.visible = false; 
			 }
		this.b3.addEventListener("click", fl_MouseClickHandler_6.bind(this));
		function fl_MouseClickHandler_6() {
			 this.b3.gotoAndPlay(1);;
			 this.num3.visible = false;
			 }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// numeros
	this.num22 = new cjs.Text("5", "67px 'Times New Roman'", "#00F700");
	this.num22.name = "num22";
	this.num22.textAlign = "center";
	this.num22.lineHeight = 76;
	this.num22.lineWidth = 65;
	this.num22.parent = this;
	this.num22.setTransform(541.2,1561.5,3.75,2.946);

	this.b0 = new lib.burbujas_1();
	this.b0.parent = this;
	this.b0.setTransform(184,281.7,2.784,2.812,0,180,0,-35.8,17.4);

	this.b0_1 = new lib.burbujas_1();
	this.b0_1.parent = this;
	this.b0_1.setTransform(469.6,527.2,2.242,1.958,0,180,0,-35.7,17.4);

	this.b0_2 = new lib.burbujas_1();
	this.b0_2.parent = this;
	this.b0_2.setTransform(378.5,957.7,2.499,2.236,180,0,0,-35.9,17.4);

	this.b0_3 = new lib.burbujas_1();
	this.b0_3.parent = this;
	this.b0_3.setTransform(787.5,668.4,3.211,3.63,0,0,0,-35.7,17.4);

	this.num11 = new cjs.Text("7", "67px 'Times New Roman'", "#00F700");
	this.num11.name = "num11";
	this.num11.textAlign = "center";
	this.num11.lineHeight = 76;
	this.num11.lineWidth = 65;
	this.num11.parent = this;
	this.num11.setTransform(172.1,1560.2,3.75,2.946);

	this.num1 = new cjs.Text("7", "67px 'Times New Roman'", "#00F700");
	this.num1.name = "num1";
	this.num1.textAlign = "center";
	this.num1.lineHeight = 76;
	this.num1.lineWidth = 74;
	this.num1.parent = this;
	this.num1.setTransform(629.2,748.8,2.469,2.469);

	this.b1 = new lib.burbujas_1();
	this.b1.parent = this;
	this.b1.setTransform(481.6,916.9,4.24,4.24,0,0,0,-35.9,17.4);

	this.num3 = new cjs.Text("1", "67px 'Times New Roman'", "#00F700");
	this.num3.name = "num3";
	this.num3.textAlign = "center";
	this.num3.lineHeight = 76;
	this.num3.lineWidth = 74;
	this.num3.parent = this;
	this.num3.setTransform(686.6,237,2.469,2.469);

	this.b3 = new lib.burbujas_1();
	this.b3.parent = this;
	this.b3.setTransform(538.9,400.2,4.24,4.24,0,0,0,-35.9,17.4);

	this.num2 = new cjs.Text("5", "67px 'Times New Roman'", "#00F700");
	this.num2.name = "num2";
	this.num2.textAlign = "center";
	this.num2.lineHeight = 76;
	this.num2.lineWidth = 74;
	this.num2.parent = this;
	this.num2.setTransform(230.7,605.8,2.469,2.469);

	this.b2 = new lib.burbujas_1();
	this.b2.parent = this;
	this.b2.setTransform(80.6,769,4.24,4.24,0,0,0,-35.9,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b2},{t:this.num2},{t:this.b3},{t:this.num3},{t:this.b1},{t:this.num1},{t:this.num11},{t:this.b0_3},{t:this.b0_2},{t:this.b0_1},{t:this.b0},{t:this.num22}]}).wait(1));

	// sumas
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Al9BxIAAguIL8AAIAAAugAl9hCIAAguIL8AAIAAAug");
	this.shape.setTransform(728.4,1678.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmGYIAAl6InTAAIAAg9IHTAAIAAl4IBLAAIAAF4IHVAAIAAA9InVAAIAAF6g");
	this.shape_1.setTransform(350.8,1678.9);

	this.resultado = new cjs.Text("12", "67px 'Times New Roman'");
	this.resultado.name = "resultado";
	this.resultado.textAlign = "center";
	this.resultado.lineHeight = 76;
	this.resultado.lineWidth = 68;
	this.resultado.parent = this;
	this.resultado.setTransform(903.9,1559.4,3.616,3.068);

	this.numero2 = new cjs.Text("n2", "67px 'Times New Roman'");
	this.numero2.name = "numero2";
	this.numero2.textAlign = "center";
	this.numero2.lineHeight = 76;
	this.numero2.lineWidth = 74;
	this.numero2.parent = this;
	this.numero2.setTransform(542.2,1560.8,3.331,2.568);

	this.numero1 = new cjs.Text("n1", "67px 'Times New Roman'");
	this.numero1.name = "numero1";
	this.numero1.textAlign = "center";
	this.numero1.lineHeight = 76;
	this.numero1.lineWidth = 95;
	this.numero1.parent = this;
	this.numero1.setTransform(174.2,1558.8,2.622,2.819);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.numero1},{t:this.numero2},{t:this.resultado},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(582.2,1177.2,991.8,1578.6);
// library properties:
lib.properties = {
	width: 1080,
	height: 1920,
	fps: 24,
	color: "#66FFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/burbujas_atlas_.png", id:"burbujas_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;