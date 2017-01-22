(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jeffreywong/Projects/PathwayCommons/web/pc_guide_enrichment_workflow_ii_app/src/client/debug.js":[function(require,module,exports){
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

},{"./livereload":"/Users/jeffreywong/Projects/PathwayCommons/web/pc_guide_enrichment_workflow_ii_app/src/client/livereload.js","fready":"fready"}],"/Users/jeffreywong/Projects/PathwayCommons/web/pc_guide_enrichment_workflow_ii_app/src/client/livereload.js":[function(require,module,exports){
'use strict';

module.exports = function appendScript() {
  var script = document.createElement('script');
  script.src = 'http://' + window.location.hostname + ':35729/livereload.js';

  document.head.insertBefore(script, document.head.firstChild);
};

},{}],"/Users/jeffreywong/Projects/PathwayCommons/web/pc_guide_enrichment_workflow_ii_app/src/client":[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-polyfill');

var debug = require('./debug');

if (debug.enabled) {
  debug.init();
}

var root = document.getElementById('root');

_reactDom2.default.render(_react2.default.createElement(
  'h1',
  null,
  'Hello, Pathway Commons App!'
), root);

},{"./debug":"/Users/jeffreywong/Projects/PathwayCommons/web/pc_guide_enrichment_workflow_ii_app/src/client/debug.js","babel-polyfill":"babel-polyfill","react":"react","react-dom":"react-dom"}]},{},["/Users/jeffreywong/Projects/PathwayCommons/web/pc_guide_enrichment_workflow_ii_app/src/client"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY2xpZW50L2RlYnVnLmpzIiwic3JjL2NsaWVudC9saXZlcmVsb2FkLmpzIiwic3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLFdBQVcsUUFBUSxRQUFSLENBQWY7QUFDQSxJQUFJLGFBQWEsUUFBUSxjQUFSLENBQWpCOztBQUVBLElBQUksUUFBUTtBQUNWLFdBQVMsQ0FBQyxDQUFDLE9BQU8sS0FEUjs7QUFHVixRQUFNLGdCQUFVO0FBQ2QsYUFBVSxVQUFWO0FBQ0Q7QUFMUyxDQUFaOztBQVFBLE9BQU8sT0FBUCxHQUFpQixLQUFqQjs7Ozs7QUNYQSxPQUFPLE9BQVAsR0FBaUIsU0FBUyxZQUFULEdBQXVCO0FBQ3RDLE1BQUksU0FBUyxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLFNBQU8sR0FBUCxHQUFhLFlBQVksT0FBTyxRQUFQLENBQWdCLFFBQTVCLEdBQXVDLHNCQUFwRDs7QUFFQSxXQUFTLElBQVQsQ0FBYyxZQUFkLENBQTRCLE1BQTVCLEVBQW9DLFNBQVMsSUFBVCxDQUFjLFVBQWxEO0FBQ0QsQ0FMRDs7Ozs7QUNRQTs7OztBQUNBOzs7Ozs7QUFUQSxRQUFRLGdCQUFSOztBQUVBLElBQU0sUUFBUSxRQUFRLFNBQVIsQ0FBZDs7QUFFQSxJQUFJLE1BQU0sT0FBVixFQUFtQjtBQUNqQixRQUFNLElBQU47QUFDRDs7QUFLRCxJQUFNLE9BQU8sU0FBUyxjQUFULENBQXdCLE1BQXhCLENBQWI7O0FBRUEsbUJBQVMsTUFBVCxDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FERixFQUVFLElBRkYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGV0IGRvbVJlYWR5ID0gcmVxdWlyZSgnZnJlYWR5Jyk7XG5sZXQgbGl2ZXJlbG9hZCA9IHJlcXVpcmUoJy4vbGl2ZXJlbG9hZCcpO1xuXG5sZXQgZGVidWcgPSB7XG4gIGVuYWJsZWQ6ICEhd2luZG93LkRFQlVHLFxuXG4gIGluaXQ6IGZ1bmN0aW9uKCl7XG4gICAgZG9tUmVhZHkoIGxpdmVyZWxvYWQgKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWJ1ZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXBwZW5kU2NyaXB0KCl7XG4gIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgc2NyaXB0LnNyYyA9ICdodHRwOi8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICc6MzU3MjkvbGl2ZXJlbG9hZC5qcyc7XG5cbiAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoIHNjcmlwdCwgZG9jdW1lbnQuaGVhZC5maXJzdENoaWxkICk7XG59O1xuIiwicmVxdWlyZSgnYmFiZWwtcG9seWZpbGwnKTtcblxuY29uc3QgZGVidWcgPSByZXF1aXJlKCcuL2RlYnVnJyk7XG5cbmlmKCBkZWJ1Zy5lbmFibGVkICl7XG4gIGRlYnVnLmluaXQoKTtcbn1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8aDE+SGVsbG8sIFBhdGh3YXkgQ29tbW9ucyBBcHAhPC9oMT4sXG4gIHJvb3Rcbik7XG4iXX0=
