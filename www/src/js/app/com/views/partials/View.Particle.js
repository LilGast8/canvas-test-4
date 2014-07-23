

APP.Views = APP.Views || {};


APP.Views.Particle = (function(window){
	
	
	function Particle(context) {
		APP.View.call(this);
		
		this.context = context;
		
		this.windowW = APP.Main.windowW;
		this.windowH = APP.Main.windowH;
		
		this.easeX = new APP.Views.Ease(Math.random(), 2, 30, 0);
		this.easeY = new APP.Views.Ease(Math.random(), 2, 30, 0);
		
		this.x = this.easeX.value*this.windowW;
		this.y = this.easeY.value*this.windowH;
	}
	
	
	Particle.prototype = Object.create(APP.View.prototype);
	Particle.prototype.constructor = Particle;
	
	
	Particle.prototype.initElt = function() {
		
	};
	
	
	Particle.prototype.bindEvents = function() {
		
	};
	
	
	Particle.prototype.resize = function() {
		this.windowW = APP.Main.windowW;
		this.windowH = APP.Main.windowH;
	};
	
	
	Particle.prototype.draw = function() {
		this.easeX.update(0.1);
		this.easeY.update(0.1);
		
		this.x = this.easeX.value*this.windowW;
		this.y = this.easeY.value*this.windowH;
		
		this.context.beginPath();
		this.context.arc(this.x, this.y, 10, 0, 2*Math.PI, false);
		this.context.fillStyle = '#ccc';
		this.context.fill();
	};
	
	
	return Particle;
	
	
})(window);

