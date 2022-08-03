import AddNumber from "./AddNumber";
import React, { Component } from "react";
export default class AddNumberRoot extends Component {
  render(): React.ReactNode {
    return (
      <div>
        <h1>Add number Root</h1>
        <AddNumber></AddNumber>
      </div>
    );
  }
}
