import AddNumber from "../components/AddNumber";
import React, { Component } from "react";
import { connect } from "react-redux";
export default connect(null, mapReduxDispatchToReactProps)(AddNumber);
function mapReduxStateToReactProps(state) {
  return {
    number: state.number,
  };
}
function mapReduxDispatchToReactProps(dispatch) {
  return {
    onClick: function (size) {
      dispatch({ type: "INCREMENT", size: size });
    },
  };
}
// export default class extends Component {
//   render() {
//     return (
//       <AddNumber
//         onClick={function (size) {
//           store.dispatch({ type: "INCREMENT", size: size });
//         }.bind(this)}
//       ></AddNumber>
//     );
//   }
// }
