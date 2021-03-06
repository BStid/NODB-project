import React, { Component } from "react";
import axios from "axios";
import "./Special.css";

class Special extends Component {
  constructor() {
    super();
    this.state = {
      speak: ""
    };
  }

  componentDidMount() {
    axios.get("/api/bible").then(response => {
      console.log(response.data);
      this.setState({ speak: response.data });
    });
  }
  render() {
    return (
      <div className={this.props.specialClass}>
        <h1 className={this.props.specialText}>
          {this.state.speak} <br /> John 3:16
        </h1>
      </div>
    );
  }
}
export default Special;
