import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    lastname: "",
    email: "",
    password: "",
  };

  handleChange1 = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };
  handleChange2 = (event) => {
    this.setState({ lastname: event.target.value });
  };
  handleChange3 = (event) => {
    this.setState({ email: event.target.value });
  };
  handleChange4 = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <form>
        <h1>Hello {this.state.name} </h1>
        <h3>Your lastname is {this.state.lastname} </h3>
        <h3>Your email is {this.state.email} </h3>
        <h3>Your password is {this.state.password} </h3>

        <p>Enter your name</p>
        <input type="text" onChange={this.handleChange1} />
        <p>Enter your lastname</p>
        <input type="text" onChange={this.handleChange2} />
        <p>Enter your email</p>
        <input type="email" onChange={this.handleChange3} />
        <p>Enter your password</p>
        <input type="password" onChange={this.handleChange4} />
      </form>
    );
  }
}

export default Form;
