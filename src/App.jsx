import React, { Component } from 'react'
import Button from './Button'
import "./App.css";

export default class App extends Component {

  colors = ["RED", "BLUE", "YELLOW", "GREEN", "ORANGE", "MAGENTA", "BROWN", "LIME"]

  shuffle = () => {
    this.setState(
      this.colors.sort(() => Math.random() - 0.5)
    )
  }

  render() {
    return (
      <div className="container">
        <div className="panel">
          {this.colors.map(color => <div key={color} className={color}>{color}</div>)}
        </div>
        <Button fn={this.shuffle} />
      </div>

    )
  }
}

