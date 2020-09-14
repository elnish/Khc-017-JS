'use strict';

// 1
function GeometricFigure(width, height) {  
   this._width = width;
   this._height = height;
}

GeometricFigure.prototype.getWidth = function() {
   return this._width;
}

GeometricFigure.prototype.setWidth = function(width) {
   return this._width = width;
}

GeometricFigure.prototype.getHeight = function() {
   return this._height;
}

GeometricFigure.prototype.setHeight = function(height) {
   return this._height = height;
}

GeometricFigure.prototype.getCenter = function() {
   var center = [];
   center[0] = [ this._width / 2 ];
   center[1] = [ this._height / 2 ];
   return console.log(center);
}

var circle = new GeometricFigure(100, 200);
circle.getCenter(); 