# wowe - starter theme for [wordpress](https://webpack.js.org/) using [webpack](https://webpack.js.org/) 

> Initial enviroment configuration designed to have the best pratices.

<a href="#features">Features</a> | <a href="#install">Install</a> |  <a href="#usage">Usage</a> | <a href="#todos">Todos</a>

----

## Features
- <a href="#Features">JS minified bundle (critical and defered)</a>
- <a href="#Features">Babel transpiler with map</a>
- <a href="#Features">CSS minified bundle (critical and defered)</a>
- <a href="#Features">Sass compiler with map</a>
- <a href="#Features">Stylelint</a>
- <a href="#Features">Font loader</a>
- <a href="#Features">Image compression (png, jpg, gif and webp)</a>
- <a href="#Features">SVG sprite loader</a>

## Install
...

## Usage

## Todos
- [ ] .md Install
- [ ] .md Usage: doc on how to use stuff (e.g. [SVG sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/) + more info for [extract](https://www.npmjs.com/package/svg-sprite-loader#extract-configuration))
- [ ] Implement wp-dev-server
- [ ] test babel polyfill
- [ ] Fix Autoprefixe
	-	[ ] Compress the same image in 2 ways, one in a good quality and another in a very low quality, to implement progressive image loading. [Reference](https://jmperezperez.com/medium-image-progressive-loading-placeholder/)
- [ ] Code spliting to deliver critical CSS/JS and defer the rest
- [ ] Bundle name (css/js) with hash (for caching) on build mode
	- [ ] Use pot files to store the hashed, to later read the names and includ dinamically on the functions.php of wp
