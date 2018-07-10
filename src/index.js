import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleCount = this.handleCount.bind(this);
  }
  handleCount() {
    this.setState({
      count: this.state.count + 1
    });
    this.setState({
      count: this.state.count + 1
    });
    console.log(this.state.count);
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button onClick={() => this.handleCount()}>count</button>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
