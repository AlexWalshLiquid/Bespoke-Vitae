(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 2048,
	height: 1200,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/square.png", id:"square"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.square = function() {
	this.initialize(img.square);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2048,1451);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjZiyIAAHzIB1AAIAACQIl7AAIAAiQIBqAAIAAqGIhqAAIAAiPIDzAAIHKJJIAAm6Ih1AAIAAiPIF3AAIAACPIhmAAIAAMXIhXADg");
	this.shape.setTransform(424.9,198.4,1.299,1.299);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlcHTIAAiQIBqAAIAAqGIhqAAIAAiPIK4AAIAAELIiaAAIAAh9IkTAAIAAD6IEYAAIAACGIkYAAIAAEIIEVAAIAAh8ICZAAIAAELg");
	this.shape_1.setTransform(300,198.1,1.299,1.299);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Am9HTIAAiQIBrAAIAAqGIhrAAIAAiPIFiAAQD7AACPB7QCPB7AADVQAADZiNB+QiSCDkLAAgAiyFDIBcAAQCwAABhhaQBchXAAiXQAAiYhlhUQhkhSivAAIhRAAg");
	this.shape_2.setTransform(183.4,198.1,1.299,1.299);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AC3HNIi3lfQgnADgRAAQg4AAgTgBIAADPIBzAAIAACOIl7AAIAAiOIBpAAIAAp9IhpAAIAAiOIFlAAQCkABBfBFQBnBJAACIQAABYgyBDQguA+hPAgICOD7IBpAAIAACOgAiDgWQAhACA4AAQBZAAA3gpQA5gqAAhIQAAhHg4gkQg1gkhgAAIhVAAg");
	this.shape_3.setTransform(312.8,62,1.299,1.299);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AByHNIAAiNIBrAAIg0iXIlXAAIg0CXIBxAAIAACNIljAAIAAiOIBQAAIDmp+IhlAAIAAiNIIHAAIAACNIhlAAIDmJ+IBQAAIAACOgAiCAmIEAAAIh/lqg");
	this.shape_4.setTransform(186.5,62,1.299,1.299);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AlyHIQixiwAAkVQAAkPC4iyQCzitEJAAQDIAACIBbQCABVAABxQAABBgmApQglApg5AAQg9AAgmgjQgmgjAAg7QAAgmANgYQgegXgxgOQg7gRhMAAQivAAh0B3Qh2B5AAC9QAAC/B4B9QBzB1CcAAQBcAABHgTQBDgTA7gmIAAjOIkqAAIAAitIH0AAIAAJrIjEAAIAAhZQiNBvi5AAQjmAAimikg");
	this.shape_5.setTransform(54.8,62.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,487.4,259.4);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj3F8QhghcgBitIAAm4IhjAAIAAiNIFwAAIAACNIhuAAIAAGwQgBBoAyA5QAyA3BXAAQBbAAAwg0QAzg2AAhpIAAm1IhvAAIAAiNIFtAAIAACNIhlAAIAAG1QAACvhgBdQhaBXidAAQieAAhahXg");
	this.shape.setTransform(370.6,191.2,1.264,1.264);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AC1HGIi1lZIg3ACQg4AAgTgBIAADNIBxAAIAACLIl1AAIAAiLIBoAAIAAp1IhoAAIAAiLIFhAAQCgAABfBEQBlBIAACHQAABVgxBEQguA9hNAfICMD4IBoAAIAACLgAiCgWQAbADA9gBQBYABA3gpQA4gqAAhHQAAhGg3glQg1gihfAAIhUAAg");
	this.shape_1.setTransform(296,59.6,1.264,1.264);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aj1F5QhfhbAAisIAAm0IhkAAIAAiMIFtAAIAACMIhtAAIAAGsQAABoAyA4QAxA2BWAAQBaAAAwgzQAyg1AAhoIAAmyIhtAAIAAiMIFpAAIAACMIhkAAIAAGyQAACthfBcQhZBWicAAQicAAhahWg");
	this.shape_2.setTransform(175.7,60.7,1.264,1.264);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AlqGwQisimAAkKQAAkACxiqQCuipD9AAQDAAACDBXQB6BSAABtQAAA/gkAoQgjAng3AAQg7AAglgiQgkgiAAg4QAAgkAMgYQgdgWgvgOQg4gQhJAAQinAAhwB0QhyB1AACyQAACuBvB2QByB4CxAAQC9AACNiYICECJQhWBeh2A0Qh6A1iIAAQkLAAioikg");
	this.shape_3.setTransform(53.5,59.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjkGaQhgg/AAhWQAAgwAageQAbgeArAAQAsAAAeAdQAbAaAAAjQAAAegNAbQA4AnBXAAQBMgBAsggQAtghAAg7QAAgzgyglQglgbhRgdQiXg2g5guQhRhEAAh0QAAhwBShIQBVhMCHAAQCAAABZA6QBXA5AABSQAAAwgbAdQgZAbgpAAQguAAgdgdQgagcAAgkQAAgYAKgUQgvgchKAAQhBAAgnAfQgmAfAAAzQAAAzAyAkQAiAZBTAfQCTA0A7AuQBSBFAAB1QAACAhbBJQhYBIiQAAQiFAAhhhBg");
	this.shape_4.setTransform(481,190.2,1.264,1.264);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AlUFSQiBiHAAjLQAAjKCFiHQCFiJDPAAQDNAACDCKQCCCGAADKQAADLiECHQiHCJjMAAQjOAAiFiJgAjajrQhYBcAACPQAACPBYBdQBWBcCEABQCGAABWhdQBXhdAAiPQAAiOhXhdQhXhdiFAAQiEAAhWBdg");
	this.shape_5.setTransform(242,190.2,1.264,1.264);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ai9HKIAAiMIBvAAIAAp7IhvAAIAAiNIF7AAIAACNIhwAAIAAJ7IBwAAIAACMg");
	this.shape_6.setTransform(144,190.2,1.264,1.264);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,522.1,250.3);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjtE+IAAhiIBJAAIAAm3IhJAAIAAhiIHZAAIAAC2IhoAAIAAhVIi7AAIAACqIC/AAIAABbIi/AAIAAC0IC8AAIAAhVIBoAAIAAC2g");
	this.shape.setTransform(208.9,40.2,1.264,1.264);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABDE+IAAhiIBQAAIAAixIklAAIAACxIBQAAIAABiIkFAAIAAhiIBIAAIAAm3IhIAAIAAhiIEFAAIAABiIhQAAIAACoIElAAIAAioIhQAAIAAhiIEGAAIAABiIhJAAIAAG3IBJAAIAABig");
	this.shape_1.setTransform(124.3,40.2,1.264,1.264);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AioGSIAAh7IBkAAIAAowIiVAAIAAB/IiDAAIAAj3IK5AAIAAD3IiDAAIAAh/IiVAAIAAIwIBkAAIAAB7g");
	this.shape_2.setTransform(34.9,40.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,239,80.5);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(69,69,69,0.004)").ss(1,1,1).p("Eg94gDlMB7xAAAIAAHLMh7xAAAg");
	this.shape.setTransform(396.1,23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Eg94ADmIAAnLMB7wAAAIAAHLg");
	this.shape_1.setTransform(396.1,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,794.2,48.1);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(69,69,69,0.004)").ss(1,1,1).p("EgCOhMBIEdAAMAAACYDIkdAAg");
	this.shape.setTransform(14.3,486.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgCOBMCMAAAiYDIEdAAMAAACYDg");
	this.shape_1.setTransform(14.3,486.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,30.7,975.3);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg9BAB4IAAjvMB6DAAAIAADvg");
	this.shape.setTransform(390.6,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,781.2,24);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgDHBCQMAAAiEfIGOAAMAAACEfg");
	this.shape.setTransform(20,424.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,848.1);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.setTransform(0.1,0,0.006,1,0,0,180,383.2,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(69,69,69,0.004)").ss(1,1,1).p("AAZh3IgxAAIAADvIAxAAg");
	this.shape.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,-13,7,26);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.setTransform(0,0,1,1,0,0,0,390.6,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(69,69,69,0.004)").ss(1,1,1).p("Eg9BgB3MB6CAAAIAADvMh6CAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-391.6,-13,783.2,26);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(0,0.1,1,0.002,0,180,0,20,404.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(69,69,69,0.004)").ss(1,1,1).p("AjHAJIGPAAIAAgRImPAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-1.9,42,4);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(20,482.8,1,1.138,0,0,0,20,424.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(69,69,69,0.004)").ss(1,1,1).p("EgDHhLZIGPAAMAAACWzImPAAg");
	this.shape.setTransform(20,482.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,42,967.3);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_90 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(90).call(this.frame_90).wait(1));

	// Layer 7
	this.instance = new lib.Symbol16();
	this.instance.setTransform(1120.5,990.3,1,1,0,0,0,243.7,129.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({_off:false},0).to({alpha:1},9).wait(10));

	// Layer 10
	this.instance_1 = new lib.Symbol15();
	this.instance_1.setTransform(958,672,1,1,0,0,0,261.1,125.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({alpha:1},9).wait(23));

	// Layer 5
	this.instance_2 = new lib.Symbol14();
	this.instance_2.setTransform(816.5,448.7,1,1,0,0,0,119.5,40.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(47).to({_off:false},0).to({alpha:1},8).wait(36));

	// bot
	this.instance_3 = new lib.Symbol9();
	this.instance_3.setTransform(1017.7,1222.4,1.026,1,0,0,0,396.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({regX:395.1,scaleX:0.01,x:1418.9},6,cjs.Ease.get(-0.5)).wait(50));

	// LH
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(69,69,69,0.004)").ss(1,1,1).p("EgCOhMBIEdAAMAAACYDIkdAAg");
	this.shape.setTransform(637.9,745.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgCOBMCMAAAiYDIEdAAMAAACYDg");
	this.shape_1.setTransform(637.9,745.7);

	this.instance_4 = new lib.Symbol8();
	this.instance_4.setTransform(637.9,745.7,1,1,0,0,0,14.3,486.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_4}]},23).to({state:[{t:this.instance_4}]},11).wait(57));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).to({regY:486.9,scaleY:0.01,y:1227.4},11,cjs.Ease.get(-0.5)).wait(57));

	// top
	this.instance_5 = new lib.Symbol7();
	this.instance_5.setTransform(1016.7,268.1,1,1,0,0,0,390.6,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(69,69,69,0.004)").ss(1,1,1).p("Eg9BgB3MB6CAAAIAADvMh6CAAAg");
	this.shape_2.setTransform(1016.7,268.1);

	this.instance_6 = new lib.Tween4("synched",0);
	this.instance_6.setTransform(1016.7,268.1);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween5("synched",0);
	this.instance_7.setTransform(623.6,268.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},15).to({state:[{t:this.instance_7}]},7).wait(69));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).to({_off:true,x:623.6},7,cjs.Ease.get(-0.5)).wait(69));

	// r
	this.instance_8 = new lib.Symbol5();
	this.instance_8.setTransform(1404.3,742.9,1,1.138,0,0,0,20,424.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(69,69,69,0.004)").ss(1,1,1).p("EgDHhLZIGPAAMAAACWzImPAAg");
	this.shape_3.setTransform(1404.3,742.7);

	this.instance_9 = new lib.Symbol6();
	this.instance_9.setTransform(1404.3,742.7,1,1,0,0,0,20,482.6);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween3("synched",0);
	this.instance_10.setTransform(1404.3,259);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},5).to({state:[{t:this.instance_10}]},9).wait(77));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({_off:false},0).to({_off:true,regX:0,regY:0,y:259,mode:"synched",startPosition:0},9).wait(77));

	// Layer 1
	this.instance_11 = new lib.square();

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2048,1451);


// stage content:



(lib.hpintro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(211.1,64.1,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1235.1,664.1,1625.9,1152);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;