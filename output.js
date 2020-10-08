'use strict';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const React = require('react'); // import Bar from './bar'


const Bar = require('./bar');

function hello(options) {
  console.log( /*#__PURE__*/React.createElement(Bar, _extends({
    list: [1, 2]
  }, options)));
}

hello();
