import React from "react";
import ReactDOM from "react-dom";
import "assets/scss/styles.scss";
import MarkdownInput from "./components/MarkdownInput";

class App extends React.Component {
  render() {
    return (
      <>
        <MarkdownInput />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
