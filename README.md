# gl-cubemap-placeholder

Simple debug cubemap generator.

## Install

```sh
npm install gl-cubemap-placeholder
```

## API
```js
var createCubemap = require('gl-cubemap-placeholder');
```

#### `var cubemap = createCubemap(gl, size)`

Takes a WebGL context, returns a
[gl-texture-cube](https://github.com/wwwtyro/gl-texture-cube)
with resolution `size`.
