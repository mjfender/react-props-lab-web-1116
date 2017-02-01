const React = require('react');


class Spaceship extends React.Component {
  render() {
    return (
        <p>Properties:
          <ul>
            <li>Name: {this.props.name}</li>
            <li>Speed: {this.props.speed}</li>
            <li>Rockets: {this.props.hasRockets}</li>
            <li>colors: {this.props.colors.join(' and ')}</li>
          </ul>
        </p>
    );
  }
}

Spaceship.defaultProps = {
  name: '',
  speed: 0,
  hasRockets: false,
  colors: ['black', 'red']
};

module.exports = Spaceship;
