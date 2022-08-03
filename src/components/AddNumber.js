import React, { Component } from "react";
import store from "../store";
export default class AddNumber extends Component {
  state = { size: 1 };
  render(): React.ReactNode {
    return (
      <div>
        <h1>Add Number</h1>
        <input
          type="button"
          value="+"
          onClick={() => {
            store.dispatch({ type: "INCREMENT", size: this.state.size });
          }}
        ></input>
        <input type="text" value="0"></input>
      </div>
    );
  }
}
