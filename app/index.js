import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Popuplar from "./components/popular";

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
  constructor(props){
    super(props);
    this.state={
      mom: this.props.mom,
      hasMom: this.props.hasMom
    }
  }
  
  render() {
    //javascript land

    return (
      <div className="container">
        <Popuplar yay={[1,2,3,4]} />
      </div>
    );
  }
}

ReactDOM.render(<App mom="dead" hasMom={false} />, document.getElementById("app"));
