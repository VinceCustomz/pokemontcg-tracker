import React from "react";

class LoginForm extends React.Component {
    state = {
        email: "",
        password: "",
        error: "",
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value, error: "" })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const fetchResponse = await fetch('/api/users/login', {
              method: 'POST',
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email: this.state.email, password: this.state.password, })
            })
            if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')      
            let token = await fetchResponse.json()
            localStorage.setItem('token', token);      
            const userDoc = JSON.parse(atob(token.split('.')[1])).user;
            this.props.setUserInState(userDoc)
        } catch (error) {
            console.log('Login Error', error);
            this.setState({ error: 'Incorrect Email or Password - Try Again' });
        }
    }

    render() {
        return (
            <div className='login-container' onSubmit={this.handleSubmit}>
                <form autoComplete="off">
                    <label>Email: </label>
                    <input type='text' name='email' value={this.state.email} onChange={this.handleChange} required />
                    <label>Password: </label>
                    <input type='password' name='password' value={this.state.password} onChange={this.handleChange} required />
                    <button type='submit'>Login</button>
                </form>
                <p className='error-message'>&nbsp;{this.state.error}</p>
            </div>
        )
    }
}

export default LoginForm;