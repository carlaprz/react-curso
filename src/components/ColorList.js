import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Color from './Color';

class ColorList extends Component {
  constructor () {
    super();
  }

  rate = (id, rating) => {
    this.props.onRate(id, rating);
  }

  remove = (id) => {
    this.props.onRemove(id);
  }

  render () {
    const {colors} = this.props;
    var output;

    if (!colors.length) {
      output = <p>No tengo colores vieja</p>
    } else {
      output = colors.map((color) => {
        return (
          <Color
          key={color.id}
          {...color}
          onRate={(rating) => {this.rate(color.id, rating)}}
          onRemove={() => {this.remove(color.id)}}
          />
        );
      });
    }

    return <div>{output}</div>
  }
}

ColorList.PropTypes = {
  onRate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
}

export default ColorList;
