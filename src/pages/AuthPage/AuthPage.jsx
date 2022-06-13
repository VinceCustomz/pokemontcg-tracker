import React from "react";
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

class AuthPage extends React.Component {
    state = {
        showLogin: true,
    }

    render() {
        return (
            <div className="AuthPage">
                <div onClick={() => this.setState({ showLogin: !this.state.showLogin })} className="hover:underline ">
                    { this.state.showLogin ? "Sign Up" : "Log In" }
                </div>
                { this.state.showLogin ? (<LoginForm setUserInState={this.props.setUserInState}/>) 
                : (<SignUpForm setUserInState={this.props.setUserInState}/>) }
            </div>
        )
    }
}

export default AuthPage;