import React, { Component } from "react";
import "./App.scss";
import { userContext } from "./context/userContext";
import Head from "./components/Head";
import Main from "./components/Main";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { email: "hola" },
    };
  }

  login = (email) => this.setState({ user: email });

  render() {
    const value = {
      user: this.state.user,
      loginUser: this.login,
    };

    return (
      <div className='App'>
        <userContext.Provider value={value}>
          <Head />
          <Main />
        </userContext.Provider>
      </div>
    );
  }
}

export default App;
