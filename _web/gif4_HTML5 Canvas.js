(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.gif4_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D12D31").s().p("AkFEGQhshtAAiZQAAiYBshtQBthsCYgBQCaABBsBsQBsBtABCYQgBCZhsBtQhsBtiaAAQiYAAhthtg");
	this.shape.setTransform(463.3,199.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},10).wait(13).to({_off:false},0).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E2D2C").s().p("Asy24IO6AAIKrY0ImlU9g");
	this.shape_1.setTransform(354.2,309.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E2D2C").s().p("EgI7ggUINtAAMAAAA2GQAAEHBBCXQBCCXCHAwQhNgXhXgnQg2gZhhgzQiPhKhKgcQh5gthwAAQi8AAhnCBQgqA0gXBEQgRAxgFAxg");
	this.shape_2.setTransform(57.9,250);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2E2D2C").s().p("AqxWcQApAIArAAQDOgBBfkRQBfkSAApNIAApkQAApfhOjtQgph9hGg5QhCg4hmAAQhPAAhPAyQCgh4DdAAQDFAAC/BsQDABrCYDFQCjDRBWEPQBXEOgBEnQABEIhJD8QhHD8iDDDQijDzjwB/QjuB+kpAAQhoAAhhgXg");
	this.shape_3.setTransform(191.1,308.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250.7,293.2,499.6,413.8);
// library properties:
lib.properties = {
	id: '9E3262ED6D864BE0A6EFCF5EF09BCA91',
	width: 180,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9E3262ED6D864BE0A6EFCF5EF09BCA91'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;