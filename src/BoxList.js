import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import uuid from 'uuid/v4';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };

    this.addBox = this.addBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  renderBoxes() {
    return (
      <ul>
        {this.state.boxes.map(box => (
          <li key={box.id}>
            <Box
              id={box.id}
              width={box.width}
              height={box.height}
              color={box.color}
              remove={this.removeBox}
            />
            {/* <button onClick={this.removeBox(this.props.id)}>X</button> */}
          </li>
        ))}
      </ul>
    );
  }

  addBox(box) {
    let newBox = { ...box, id: uuid() };
    this.setState(currState => ({
      boxes: [...currState.boxes, newBox]
    }));
  }

  removeBox(boxId) {
    // do we need the id to remove box?
    this.setState(currState => ({
      boxes: currState.boxes.filter(b => b.id !== boxId)
    }));
  }

  render() {
    return (
      <div className="BoxList">
        Box Maker
        <NewBoxForm addBox={this.addBox} />
        {this.renderBoxes()}
      </div>
    );
  }
}

export default BoxList;
