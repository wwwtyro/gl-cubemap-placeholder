'use strict'

var createTextureCube = require('gl-texture-cube')

var signs = ['pos', 'neg']
var axes = ['x', 'y', 'z']

module.exports = function genTextures (gl, size) {
  var textures = {
    pos: {},
    neg: {}
  }
  for (var i = 0; i < signs.length; i++) {
    var sign = signs[i]
    for (var j = 0; j < axes.length; j++) {
      var axis = axes[j]
      var canvas = document.createElement('canvas')
      canvas.width = canvas.height = size
      var ctx = canvas.getContext('2d')
      if (axis === 'x' || axis === 'z') {
        ctx.translate(size, size)
        ctx.rotate(Math.PI)
      }
      ctx.fillStyle = 'rgb(0,64,128)'
      ctx.fillRect(0, 0, size, size)
      ctx.fillStyle = 'white'
      ctx.fillRect(8, 8, size - 16, size - 16)
      ctx.fillStyle = 'rgb(0,64,128)'
      ctx.font = size / 4 + 'px serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(sign + '-' + axis, size / 2, size / 2)
      ctx.strokeStyle = 'rgb(0,64,128)'
      ctx.strokeRect(0, 0, size, size)
      textures[sign][axis] = canvas
    }
  }
  return createTextureCube(gl, textures)
}
