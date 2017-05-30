import React, { Component} from 'react';
import PropTypes from 'prop-types';

class AddColorForm extends Component {
  constructor () {
    super();

    this.state = {
      title: '',
      value: '#ffffff'
    }
  }

  submit = (e) => {
    const {title, value} = this.state;

    e.preventDefault();

    this.props.onAddColor({
      title,
      value
    });

    this.setState({
      title: '',
      value: '#ffffff'
    })
  }

  handleTitle = (e) => {
    const title = e.target.value;

    this.setState({
      title
    });
  }

  handleColor = (e) => {
    const value = e.target.value;

    this.setState({
      value
    })
  }

  render () {
    const {title, value} = this.state;

    return (
      <form onSubmit={this.submit}>
        <input
          value={title}
          type="text"
          placeholder="aca va el titulo"
          onChange={this.handleTitle}
        />
        <input
          value={value}
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
