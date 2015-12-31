# gl-cubemap-placeholder

Simple debug cubemap generator.

## Install

```sh
npm install gl-cubemap-placeholder
```

## API
```js
var debugCubemap = require('gl-cubemap-placeholder');
```

#### `var textures = debugCubemap(gl)`

Takes a WebGL context, returns a collection of disjoint cubemap textures
in the form:

```js
{
    pos: {
        x: gl-texture2d texture,
        y: gl-texture2d texture,
        z: gl-texture2d texture
    },
    neg: {
        x: gl-texture2d texture,
        y: gl-texture2d texture,
        z: gl-texture2d texture
    }
}
```

See [gl-texture2d](https://github.com/stackgl/gl-texture2d) for more
information about the returned texture objects.
