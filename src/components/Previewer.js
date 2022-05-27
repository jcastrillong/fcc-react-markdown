import React, { Component } from "react";
import "./Previewer.css";

class Previewer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createMarkUp(text) {
    return { __html: text };
  }

  render() {
    return (
      <div id="preview-container" className="d-flex flex-column h-100">
        <div className="d-flex justify-content-center bg-danger">
          <h2 className="p-2 m-0">Previewer</h2>
        </div>
        <div
          id="preview"
          className="p-2 overflow-auto"
          dangerouslySetInnerHTML={this.createMarkUp(this.props.markedText)}
        ></div>
      </div>
    );
  }
}

export default Previewer;
