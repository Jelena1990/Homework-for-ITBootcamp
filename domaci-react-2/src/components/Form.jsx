import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "hghh",
    lastname: "",
    mail: "",
    password: "",
  };
  handleChange = (event) => {
    //ovo name iz getAttribute("name") se odnosi na to kakvo sam ime dala inputu a ne na name iz state
    let nameAttribute = event.target.getAttribute("name"); //od inputa koje sam postavila dole u render i dali mu name da li je ime name,lastname,password ili mail
    if (nameAttribute === "ime") {
      //jr nezimam name vec njegovo svojstvo, njegovu vrednst ja sam mogla i da
      this.setState({
        name: event.target.value,
      });
    } else if (nameAttribute === "prezime") {
      this.setState({
        lastname: event.target.value,
      });
    } else if (nameAttribute === "mail") {
      this.setState({
        mail: event.target.value,
      });
    } else if (nameAttribute === "password") {
      this.setState({
        password: event.target.value,
      });
    }
  };

  componentDidUpdate() {
    console.log(this.state); //metoda ima svoje unutrasnje metode funkcionise kao eventlistener za state i kad se na nesto klikne mogu da ga consologujem ili sta hocu da radim sa tim
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label name="ime">Name: </label>
          <input type="text" name="ime" onChange={this.handleChange} />
        </div>
        <div>
          <label name="prezime">Last name: </label>
          <input type="text" name="prezime" onChange={this.handleChange} />
        </div>
        <div>
          <label name="mail">e-mail: </label>
          <input type="email" name="mail" onChange={this.handleChange} />
        </div>
        <div>
          <label name="password">Password: </label>
          <input type="password" name="password" onChange={this.handleChange} />
        </div>
        <h2> {this.state.name}</h2>
        <h2> {this.state.lastname}</h2>
        <h2> {this.state.mail}</h2>
        <h2> {this.state.password}</h2>
      </form>
    );
  }
}

export default Form;
