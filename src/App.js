import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIsOpen: false
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* Using ref inline callback to keep things simple, beware of caveats:
           https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs */}
          <wc-menu-button
            is-open={this.state.menuIsOpen}
            ref={menuButton => {
              if (menuButton) {
                menuButton.isOpenChangedFunc = this.handleMenuOpenChanged;
              }
            }}
          />
          <p>React app consuming a web component</p>
          <p>The menu is {this.state.menuIsOpen ? "open" : "closed"}</p>
        </header>
        <footer>
          <a href="https://github.com/wes566/sample-react-consumes-web-component">
            <img width="50" src={logo} alt="logo" />
          </a>
        </footer>
      </div>
    );
  }

  handleMenuOpenChanged = isOpen => {
    this.setState({ ...this.state, menuIsOpen: isOpen });
  };
}

export default App;
