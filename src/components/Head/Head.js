import React, { Component } from "react";
import "./Head.scss";
import { userContext } from "../../context/userContext";

class Head extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <>
        <userContext.Consumer>
          {({ user }) => {
            return (
              <div className='Head'>
                <span>{user.email}</span>
              </div>
            );
          }}
        </userContext.Consumer>
      </>
    );
  }
}

export default Head;
