import React, { Component } from "react";
import "./Card.scss";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className='Card'>
        <img src={this.props.userData.urlFoto} alt='Foto' />
        <p> Nombre: {this.props.userData.name}</p>
        <p> Email: {this.props.userData.email}</p>
        <p> Edad: {this.props.userData.age}</p>
      </div>
    );
  }
}

export default Card;
