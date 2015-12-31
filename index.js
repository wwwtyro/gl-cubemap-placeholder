'use strict';

var Texture2D = require('gl-texture2d');

var signs = ['pos', 'neg'];
var axes = ['x', 'y', 'z'];

module.exports = function genTextures(gl) {
    var textures = {
        pos: {},
        neg: {}
    };
    var size = 512;
    for (var i = 0; i < signs.length; i++) {
        var sign = signs[i];
        for (var j = 0; j < axes.length; j++) {
            var axis = axes[j];
            var canvasT = document.createElement('canvas');
            canvasT.width = canvasT.height = size;
            var ctx = canvasT.getContext('2d');
            ctx.fillStyle = 'rgb(0,64,128)';
            ctx.fillRect(0, 0, size, size);
            ctx.fillStyle = 'white';
            ctx.fillRect(8, 8, size-16, size-16);
            ctx.fillStyle = 'rgb(0,64,128)';
            ctx.font = size/4 + 'px serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(sign+'-'+axis, size/2, size/2);
            ctx.strokeStyle = 'rgb(0,64,128)';
            ctx.strokeRect(0, 0, size, size);
            textures[sign][axis] = Texture2D(gl, canvasT);
            textures[sign][axis].magFilter = gl.LINEAR;
        }
    }
    return textures;
}