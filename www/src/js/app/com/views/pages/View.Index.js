

APP.Views = APP.Views || {};


APP.Views.Index = (function(window){
	
	
	function Index() {
		APP.View.call(this);
	}
	
	
	Index.prototype = Object.create(APP.View.prototype);
	Index.prototype.constructor = Index;
	
	
	Index.prototype.initElt = function() {
		this.$.page = $(document.getElementById('page-content'));
		
		this.canvas = document.getElementById('canvas');
		this.context = this.canvas.getContext('2d');
		this.$.canvas = $(this.canvas);
		
		this.particle = new APP.Views.Particle(this.context);
		this.particle.init();
		
		TweenLite.ticker.addEventListener('tick', _draw, this);
	//	TweenLite.ticker.fps(15);
	};
	
	
	Index.prototype.bindEvents = function() {
		this.resizeWindowProxy = $.proxy(_resize, this);
		APP.Main.$.window.on('resize', this.resizeWindowProxy);
		
		_resize.call(this);
	};
	
	
	Index.prototype.unbindEvents = function() {
		
	};
	
	
	var _resize = function() {
		APP.Main.resize();
		
		this.canvas.width = APP.Main.windowW;
		this.canvas.height = APP.Main.windowH;
		
		this.particle.resize();
	};
	
	
	var _draw = function() {
		APP.Main.stats.begin();
		
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		
		this.particle.draw();
		
		APP.Main.stats.end();
	};
	
	
	return new Index();
	
	
})(window);

