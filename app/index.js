import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class One extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
      </React.Fragment>
    );
  }
}
class Two extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
      </React.Fragment>
    );
  }
}
class Three extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
      </React.Fragment>
    );
  }
}

class App extends React.Component {
  render() {
    //javascript land

    return (
      <React.Fragment>
        <One />
        <Two />
        <Three />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
