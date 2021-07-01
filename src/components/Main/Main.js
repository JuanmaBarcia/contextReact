import React, { Component } from "react";
import "./Main.scss";
import Formulario from "../Formulario";
import Card from "../Card";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  getUser = (user) => this.setState({ user });

  render() {
    return (
      <div className='Main'>
        <Formulario getUser={this.getUser} />
        <Card userData={this.state.user} />
      </div>
    );
  }
}

export default Main;
