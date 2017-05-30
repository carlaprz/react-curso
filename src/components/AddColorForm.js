import React, { Component} from 'react';
import PropTypes from 'prop-types';

class AddColorForm extends Component {
  constructor () {
    super();

    this.state = {
      title: '',
      color: '#ffffff'
    }
  }

  submit = (e) => {
    const {title, color} = this.state;

    e.preventDefault();

    this.props.onAddColor({
      title,
      color
    });

    this.setState({
      title: '',
      color: '#ffffff'
    })
  }

  handleTitle = (e) => {
    const title = e.target.value;

    this.setState({
      title
    });
  }

  handleColor = (e) => {
    const color = e.target.value;

    this.setState({
      color
    })
  }

  render () {
    const {title, color} = this.state;

    return (
      <form onSubmit={this.submit}>
        <input
          value={title}
          type="text"
          placeholder="aca va el titulo"
          onChange={this.handleTitle}
        />
        <input
          value={color}
          type="color"
          onChange={this.handleColor}
        />
        <button>ADD</button>
      </form>
    );
  }
}

AddColorForm.propTypes = {
  onAddColor: PropTypes.func.isRequired
}


export default AddColorForm;
