import React, { Component } from "react";
import "./App.css";

class HelloWorld extends Component {
  render() {
    const styleObj = {
      backgroundColor: "red"
    };

    return (
      <div className="App" style={styleObj} id="hello-world">
        <h2>Hello {this.props.name}</h2>
        <h2>This is a section of the component</h2>
      </div>
    );
  }
}

export default HelloWorld;
