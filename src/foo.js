const React = require('react');

// import Bar from './bar'

const Bar = require('./bar');

function hello(options) {
  console.log(<Bar list={[ 1, 2 ]} { ...options } />);
}

hello();
