import React, { Component } from "react";

export default class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const fetchResponse = await fetch('/api/users/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      });

      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");

      let token = await fetchResponse.json();
      localStorage.setItem("token", token);

      const userDoc = JSON.parse(atob(token.split(".")[1])).user;
      this.props.setUserInState(userDoc);
    } catch (err) {
      console.log("SignupForm error", err);
      this.setState({ error: "Login/Sign Up Failed - Try Again" });
    }
  };

  render() {
    return (
      <div>
        <div className="form-container" onSubmit={this.handleSubmit}>
          <form autoComplete="off" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            {/* <label>Email</label> */}
            <input
              className="block w-full p-4 text-lg rounded-sm bg-gray-100 mt-12 mb-12"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email"
              required
            />
            {/* <label>Password</label> */}
            <input
              className="block w-full p-4 text-lg rounded-sm bg-gray-100 mt-12 mb-12"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
              required
            />
            <button type="submit" 
            className="uppercase block mt-12 mb-12 w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
              LOG IN
              </button>

          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>




      
    );
  }
}
