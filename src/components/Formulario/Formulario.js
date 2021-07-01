import React, { Component } from "react";
import "./Formulario.scss";
import { userContext } from "../../context/userContext";

class Formulario extends Component {
  static contextType = userContext;
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      urlFoto: "",
      age: "",
      user: {},
    };
  }

  handleChangeName = (event) => this.setState({ name: event.target.value });
  handleChangeEmail = (event) => this.setState({ email: event.target.value });
  handleChangeURL = (event) => this.setState({ urlFoto: event.target.value });
  handleChangeAge = (event) => this.setState({ age: event.target.value });

  handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      urlFoto: this.state.urlFoto,
      age: this.state.age,
    };

    const userCont = this.context;
    userCont.loginUser(user);

    e.target.reset();

    this.props.getUser(user);
  };

  render() {
    return (
      <div className='Formulario'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre:
            <input type='text' name='name' onChange={this.handleChangeName} />
          </label>
          <label>
            Email:
            <input type='text' name='email' onChange={this.handleChangeEmail} />
          </label>
          <label>
            URL Foto:
            <input type='text' name='urlFoto' onChange={this.handleChangeURL} />
          </label>
          <label>
            Edad:
            <input type='number' name='age' onChange={this.handleChangeAge} />
          </label>
          <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}

export default Formulario;
