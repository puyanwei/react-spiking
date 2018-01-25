import React, { Component } from "react";
import "./App.css";

class HelloWorld extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          backgroundColor: "red",
          fontSize: 33 / 2
        }}
        id="hello-world"
      >
        <h2>Hello {this.props.name}</h2>
        <h2>This is a section of the component</h2>
      </div>
    );
  }
}

export default HelloWorld;

// class HelloWorld extends React.Component{
//   render(){ //returns jsx
//
//     return (
//
//     );
//   }
// }
//
// ReactDOM.render(<HelloWorld name="Chris"/>, document.getElementById("app"))
//
// //props = properties, style, className, state
