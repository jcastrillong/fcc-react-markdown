import React, { Component } from "react";
import * as marked from "marked";

import Previewer from "./Previewer";
import logo from "../logo.svg";
import "./Editor.css";

const firstMarkedText =
  `# Welcome
## to my React Markdown Previewer! <hr>
![](${logo}) <hr>
[Instagram](https://www.instagram.com/jcastrillong) <hr>\n` +
  "`Array.prototype.map()` \n" +
  "```\nconst codeBlock = () => {\n return true; \n}\n``` \n" +
  `* React 
* Bootstrap
>**Bockquote**`;

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: firstMarkedText,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div id="content" className="bg-dark text-light">
        <div id="editor-container" className="d-flex flex-column w-100">
          <div
            id="editor-header"
            className="d-flex justify-content-center bg-primary"
          >
            <h2 className="p-2 m-0">Editor</h2>
          </div>
          <textarea
            id="editor"
            type="text"
            defaultValue={firstMarkedText}
            data-gramm="false"
            speellcheck="false"
            placeholder="Enter your markdown here"
            className="h-100 p-2"
            onChange={this.handleChange}
          ></textarea>
        </div>
        <Previewer markedText={marked.parse(this.state.input)} />
      </div>
    );
  }
}

export default Editor;
