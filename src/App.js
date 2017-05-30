import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList';
import {v4} from 'node-uuid';

class App extends Component {

  constructor () {
    super();

    this.state = {
      colors: []
    }
  }

  addColor = (data) => {
    const {title, color} = data,
        colorEntity = {
        id: v4(),
        title,
        value: color
      },
      colors = [
        ...this.state.colors,
        colorEntity
      ];

    this.setState({colors});
  }

  rateColor = () => {

  }

  removeColor = (id) => {
    const colors = this.state.colors.filter((color) => {
      return color.id !== id;
    });

    this.setState({colors});
  }

  render() {
    const {colors} = this.state;

    return (
      <div>
        <AddColorForm onAddColor={this.addColor}/>
        <ColorList
          colors={colors}
          onRate={this.rateColor}
          onRemove={this.removeColor}
        />
      </div>
    );
  }
}

export default App;
