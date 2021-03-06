/* global Game */

//------------------------------------------------------------------
//
// Defines a 2D circle.  'spec' is defined as:
//	{
//		center: {x, y},
//		radius:
//	}
//
//------------------------------------------------------------------
Game.components.Circle = function(spec){
	'use strict';
	var radiusSq = spec.radius * spec.radius,	// This gets used by various mathematical operations to avoid a sqrt
		that = {
			get center(){ return spec.center; },
			set center(value) { spec.center = value; },
			get radius(){ return spec.radius; },
			set radius(value){ spec.radius = value; radiusSq = spec.radius * spec.radius; },
			get radiusSq(){ return radiusSq; },
			get isGraze() { return spec.isGraze; },
			set isGraze(value) { spec.isGraze = value; }
		};

	//------------------------------------------------------------------
	//
	// Checks to see if the two circles intersect each other.  Returns
	// true if they do, false otherwise.
	//
	//------------------------------------------------------------------
	that.intersects = function(other){
		var distance = Math.pow((spec.center.x - other.center.x), 2) + Math.pow((spec.center.y - other.center.y), 2);
		var rad = Math.pow(spec.radius + other.radius, 2);
		return (distance < rad);
	};

	return that;
};
