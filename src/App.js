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
        {/* <div className="App">
          <NavBar setUserInState={this.setUserInState} user={this.state.user}/>
          { this.state.user ? 
            <Routes>
              <Route path='/home' element={<MainPage />}/>
              <Route path='/cards' element={<Deckbox />}/>
              <Route path='*' element={<Navigate to='/home' replace />} />
            </Routes>
            : 
            <Routes>
              <Route path='/home' element={<MainPage />}/>
              <Route path='/authenticate' element={<AuthPage setUserInState={this.setUserInState} />}/>
              <Route path='*' element={<Navigate to='/home' replace />} />
            </Routes>             
          }
        </div> */}


        <section class="min-h-screen flex items-stretch text-white ">
        <div class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" >
            <div class="absolute bg-black opacity-60 inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9rZW1vbiUyMGNhcmRzfGVufDB8fDB8fA%3D%3D&w=1000&q=80')] bg-cover bg-center h-screen"></div>
            <div class="w-full px-24 z-10">
                <h1 class="text-5xl font-bold text-left tracking-wide">Gotta Collect 'Em All</h1>
                <p class="text-3xl my-4">Collect your favorite cards while skipping the scalpers</p>
            </div>
            <div class="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
                
            </div>
        </div>
        <div class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-slate-700" >
            <div class="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" >
                <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            </div>
            <div class="w-full py-6 z-20">
                <h1 class="my-6 text-5xl font-bold tracking-wide">
                  <div className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg  bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png')] bg-center bg-cover"></div>
                    PokePacks
                </h1>
                <div class="py-6 space-x-2">
                    <span class="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg  bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png')] bg-center bg-cover "></span>
                    <span class="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg  bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png')] bg-center bg-cover "></span>
                    <span class="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg  bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png')] bg-center bg-cover "></span>
                </div>
                {/* <p class="text-gray-100">
                    or use email your account
                </p> */}

        <div className="App">
          <NavBar setUserInState={this.setUserInState} user={this.state.user}/>
          { this.state.user ? 
            <Routes>
              <Route path='/home' element={<MainPage />}/>
              <Route path='/cards' element={<Deckbox />}/>
              <Route path='*' element={<Navigate to='/home' replace />} />
            </Routes>
            : 
            <Routes>
              <Route path='/home' element={<MainPage />}/>
              <Route path='/authenticate' element={<AuthPage setUserInState={this.setUserInState} />}/>
              <Route path='*' element={<Navigate to='/home' replace />} />
            </Routes>             
          }
        </div>



                
            </div>
        </div>
    </section>


      </main>
    );
  }
}

export default App;