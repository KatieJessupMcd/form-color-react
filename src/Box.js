import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.remove(this.props.id);
  }

  render() {
    const styleObj = {
      height: `${this.props.height}px`,
      width: `${this.props.width}px`,
      backgroundColor: this.props.color
    };
    return (
      <div className="Box" style={styleObj}>
        <button onClick={this.handleClick}>X</button>
      </div>
    );
  }
}

export default Box;
