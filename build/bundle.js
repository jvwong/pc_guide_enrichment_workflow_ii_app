(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jeffreywong/Projects/PathwayCommons/web/scaffolding/pc-app-scaffold/src/client/debug.js":[function(require,module,exports){
'use strict';

var domReady = require('fready');
var livereload = require('./livereload');

var debug = {
  enabled: !!window.DEBUG,

  init: function init() {
    domReady(livereload);
  }
};

module.exports = debug;

},{"./livereload":"/Users/jeffreywong/Projects/PathwayCommons/web/scaffolding/pc-app-scaffold/src/client/livereload.js","fready":"fready"}],"/Users/jeffreywong/Projects/PathwayCommons/web/scaffolding/pc-app-scaffold/src/client/livereload.js":[function(require,module,exports){
'use strict';

module.exports = function appendScript() {
  var script = document.createElement('script');
  script.src = 'http://' + window.location.hostname + ':35729/livereload.js';

  document.head.insertBefore(script, document.head.firstChild);
};

},{}],"/Users/jeffreywong/Projects/PathwayCommons/web/scaffolding/pc-app-scaffold/src/client":[function(require,module,exports){
'use strict';

require('babel-polyfill');

var debug = require('./debug');

if (debug.enabled) {
  debug.init();
}

// TODO client
// react example

var React = require('react');
var ReactDOM = require('react-dom');

var div = document.createElement('div');
document.body.appendChild(div);

ReactDOM.render(React.createElement(
  'h1',
  null,
  'Hello, world!'
), div);

},{"./debug":"/Users/jeffreywong/Projects/PathwayCommons/web/scaffolding/pc-app-scaffold/src/client/debug.js","babel-polyfill":"babel-polyfill","react":"react","react-dom":"react-dom"}]},{},["/Users/jeffreywong/Projects/PathwayCommons/web/scaffolding/pc-app-scaffold/src/client"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY2xpZW50L2RlYnVnLmpzIiwic3JjL2NsaWVudC9saXZlcmVsb2FkLmpzIiwic3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLFdBQVcsUUFBUSxRQUFSLENBQWY7QUFDQSxJQUFJLGFBQWEsUUFBUSxjQUFSLENBQWpCOztBQUVBLElBQUksUUFBUTtBQUNWLFdBQVMsQ0FBQyxDQUFDLE9BQU8sS0FEUjs7QUFHVixRQUFNLGdCQUFVO0FBQ2QsYUFBVSxVQUFWO0FBQ0Q7QUFMUyxDQUFaOztBQVFBLE9BQU8sT0FBUCxHQUFpQixLQUFqQjs7Ozs7QUNYQSxPQUFPLE9BQVAsR0FBaUIsU0FBUyxZQUFULEdBQXVCO0FBQ3RDLE1BQUksU0FBUyxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLFNBQU8sR0FBUCxHQUFhLFlBQVksT0FBTyxRQUFQLENBQWdCLFFBQTVCLEdBQXVDLHNCQUFwRDs7QUFFQSxXQUFTLElBQVQsQ0FBYyxZQUFkLENBQTRCLE1BQTVCLEVBQW9DLFNBQVMsSUFBVCxDQUFjLFVBQWxEO0FBQ0QsQ0FMRDs7Ozs7QUNBQSxRQUFRLGdCQUFSOztBQUVBLElBQUksUUFBUSxRQUFRLFNBQVIsQ0FBWjs7QUFFQSxJQUFJLE1BQU0sT0FBVixFQUFtQjtBQUNqQixRQUFNLElBQU47QUFDRDs7QUFFRDtBQUNBOztBQUVBLElBQUksUUFBUSxRQUFRLE9BQVIsQ0FBWjtBQUNBLElBQUksV0FBVyxRQUFRLFdBQVIsQ0FBZjs7QUFFQSxJQUFJLE1BQU0sU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQSxTQUFTLElBQVQsQ0FBYyxXQUFkLENBQTJCLEdBQTNCOztBQUVBLFNBQVMsTUFBVCxDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FERixFQUVFLEdBRkYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGV0IGRvbVJlYWR5ID0gcmVxdWlyZSgnZnJlYWR5Jyk7XG5sZXQgbGl2ZXJlbG9hZCA9IHJlcXVpcmUoJy4vbGl2ZXJlbG9hZCcpO1xuXG5sZXQgZGVidWcgPSB7XG4gIGVuYWJsZWQ6ICEhd2luZG93LkRFQlVHLFxuXG4gIGluaXQ6IGZ1bmN0aW9uKCl7XG4gICAgZG9tUmVhZHkoIGxpdmVyZWxvYWQgKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWJ1ZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXBwZW5kU2NyaXB0KCl7XG4gIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgc2NyaXB0LnNyYyA9ICdodHRwOi8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICc6MzU3MjkvbGl2ZXJlbG9hZC5qcyc7XG5cbiAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoIHNjcmlwdCwgZG9jdW1lbnQuaGVhZC5maXJzdENoaWxkICk7XG59O1xuIiwicmVxdWlyZSgnYmFiZWwtcG9seWZpbGwnKTtcblxubGV0IGRlYnVnID0gcmVxdWlyZSgnLi9kZWJ1ZycpO1xuXG5pZiggZGVidWcuZW5hYmxlZCApe1xuICBkZWJ1Zy5pbml0KCk7XG59XG5cbi8vIFRPRE8gY2xpZW50XG4vLyByZWFjdCBleGFtcGxlXG5cbmxldCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5sZXQgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxubGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggZGl2ICk7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPGgxPkhlbGxvLCB3b3JsZCE8L2gxPixcbiAgZGl2XG4pO1xuIl19
