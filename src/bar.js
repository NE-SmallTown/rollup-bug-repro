const React = require('react');

class Baz extends React.Component{
  render() {
    return <div>1</div>
  }
}

module.exports = function Bar(props) {
  const { list, ...rest } = props;

  return list.map((_, index) => <Baz key={index} { ...rest } />);
};
