import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Popuplar from "./components/popular";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mom: this.props.mom,
      hasMom: this.props.hasMom
    };
  }

  render() {
    //javascript land
    return (
      <div className="container">
        <Popuplar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
