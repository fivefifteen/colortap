<div align="center">

  <a href="https://github.com/fivefifteen/colortap">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./assets/colortap-white.png">
      <img src="./assets/colortap.png" alt="ColorTap">
    </picture>
  </a>

  # ColorTap

  A tiny, dependency-free, color input field helper that utilizes the native color picker.

  [![npm package version](https://img.shields.io/npm/v/colortap.svg?style=flat-square)](https://www.npmjs.com/package/colortap)
  [![npm package downloads](https://img.shields.io/npm/dt/colortap.svg?style=flat-square)](https://www.npmjs.com/package/colortap)
  [![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/fivefifteen/colortap?style=flat-square)](https://github.com/fivefifteen/colortap)
  [![code style](https://img.shields.io/badge/code_style-standard-yellow.svg?style=flat-square)](https://github.com/standard/standard)
  [![license](https://img.shields.io/github/license/fivefifteen/colortap.svg?style=flat-square)](license.md)

  <a href="https://fivefifteen.com" target="_blank"><img src="./assets/fivefifteen.png" /><br /><b>A Five Fifteen Project</b></a>

</div>


## Demo

Visit https://colortap.js.org


## Installation


### Manual Download

[Download the latest version of colortap](https://github.com/fivefifteen/colortap/archive/refs/heads/main.zip) and then place the following HTML in your page's head element:

```html
<script type="text/javascript" src="dist/colortap.min.js"></script>
<link rel="stylesheet" href="dist/colortap.min.css" />
```


### CDN (Courtesy of [jsDelivr](https://jsdelivr.com))

Place the following HTML in your page's head element (check to make sure the version in the URLs are the version you want):

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/fivefifteen/colortap@0.3/dist/colortap.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fivefifteen/colortap@0.3/dist/colortap.min.css" />
```


### [NPM](https://npmjs.com)

```
npm install colortap --save
```

```js
// ES6
import colortap from 'colortap'

// CommonJS
const colortap = require('colortap')
```


### [Fetcher](https://github.com/fivefifteen/fetcher)

```
fetcher install fivefifteen/colortap --save
```


### [Bower](https://bower.io)

```
bower install fivefifteen/colortap --save
```


## Usage


### Basic HTML Structure

```html
<div class="colortap">
  <input type="color" id="main-color" value="#5185b3">
  <button type="button" class="colortap-open colortap-value" data-colortap-style-prop="background-color"></button>
</div>
```


### The `colortap` Function

Initiates colortap on any element that has the `colortap` class. This should be a container around your color input.


#### Example

```js
window.addEventListener('load', function () {
  colortap()
})
```


## Attributes/Classes

 * The `colortap-input` class - Any input element with this class will have it's value set to the selected color any time the color is changed. The color will also be set to any value that is entered into this input field.

 * The `colortap-open` class - Any element with this class will open the color picker when clicked.

 * The `colortap-value` class - Any element with this class will have it's text content set to the color when the color is changed. If this element is an input, it's value will be updated instead of text content.

 * The `data-colortap-style-prop` attribute - Set this attribute to a style property (like `background` or `color`) on an element to have it's style updated when the color is changed. Multiple style properties can be defined by separating them with a comma (ie. `background,color`).


## JavaScript Methods

The containing colortap element (the element with the `colortap` class) will have the following methods attached to it available for use:

```js
var color = document.querySelector('.color')

color.open() // Opens the color picker

color.set('#00ff00') // Sets the color

var currentColor = color.get() // Gets the current color

// The `change` event bubbles up to the containing element so you can detect changes like so:
color.addEventListener('change', function () {
  document.body.style.setProperty('--color', event.target.value)
})
```


## Related

 - [FileBokz](https://github.com/fivefifteen/filebokz) - A tiny, dependency-free, highly customizable and configurable, easy to use file input with some pretty sweet features.

 - [GrowField](https://github.com/fivefifteen/growfield) - A tiny, dependency-free JavaScript module for making textarea elements grow with their content.

 - [HashJump](https://github.com/fivefifteen/hashjump) - A tiny, dependency-free JavaScript module for handling anchor links and scrolling elements into view.

 - [Kloner](https://github.com/fivefifteen/kloner) - A tiny, dependency-free JavaScript module for cloning/repeating elements.


## License

MIT. See the [license file](license.md) for more info.
