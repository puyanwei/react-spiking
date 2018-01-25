import React, { Component } from "react";
import "./App.css";

class HelloWorld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "hotpink"
    };
  }

  toggleColor() {
    if (this.state.color === "hotpink") {
      this.setState({
        color: "yellow"
      });
    } else {
      this.setState({
        color: "hotpink"
      });
    }
  }

  render() {
    const styleObj = {
      backgroundColor: "red"
    };

    return (
      <div className="App" style={styleObj} id="hello-world">
        <h2 onClick={this.toggleColor.bind(this)}>Hello {this.state.color}</h2>
        <h2>This is a section of the component</h2>
      </div>
    );
  }
}

export default HelloWorld;
