import React, { Component } from "react";

export default class DisplayNumber extends Component {
  render(): React.ReactNode {
    return (
      <div>
        <h1>Display Number</h1>
        <input type="text" value="0" readOnly></input>
      </div>
    );
  }
}
