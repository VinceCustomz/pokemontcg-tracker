import './App.css';
import React, { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MainPage from './components/MainPage/MainPage';
import AuthPage from './pages/AuthPage/AuthPage';
import Deckbox from './pages/Deckbox/Deckbox';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      cards: [],
    }
  }

  setUserInState = (incomingUser) => {
    this.setState({ user: incomingUser })
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1])); 
      if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        token = null;
      } else {
        let userDoc = payload.user
        this.setState({user: userDoc})      
      }
    }
  }

  render() {
    return (
      <main>
        <NavBar setUserInState={this.setUserInState} user={this.state.user}/> 
        <div className="App">
          { this.state.user ? 
            <Routes>
              <Route path='/home' element={<MainPage />}/>
              <Route path='/cards' element={<Deckbox />}/>
              <Route path='*' element={<Navigate to='/home' replace />} />
            </Routes>
            : 
            <Routes>
              <Route path='/home' element={<AuthPage setUserInState={this.setUserInState} />}/>
              <Route path='/authenticate' element={<AuthPage setUserInState={this.setUserInState} />}/>
              <Route path='*' element={<Navigate to='/home' replace />} />
            </Routes>             
          }
        </div>




      </main>
    );
  }
}

export default App;