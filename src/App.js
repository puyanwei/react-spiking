import React, { Component } from "react";
import "./App.css";

const colorArr = ["red", "blue", "green", "yellow", "grey", "orange", "violet"];

class HelloWorld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "hotpink"
    };
  }

  componentDidMount() {
    let colorPos = 0;
    setInterval(() => {
      if (colorArr.length - 1 > colorPos) {
        this.setState({
          color: colorArr[colorPos]
        });
        colorPos++;
      } else {
        this.setState({
          color: colorArr[colorPos]
        });
        colorPos = 0;
      }
    }, 700);
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

  changeColor(event) {
    this.setState({
      color: event.target.value
    });
  }

  render() {
    const styleObj = {
      backgroundColor: this.state.color
    };

    return (
      <div className="App" style={styleObj} id="hello-world">
        <h2 onClick={this.toggleColor.bind(this)}>Hello {this.state.color}</h2>
        <input
          value={this.state.color}
          onChange={this.changeColor.bind(this)}
        />
      </div>
    );
  }
}

export default HelloWorld;
