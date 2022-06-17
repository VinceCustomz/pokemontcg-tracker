import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    handleLogout = () => {
        localStorage.removeItem('token');
        this.props.setUserInState(null);
    }

    render() {
        return (
            <nav class="flex items-center bg-rose-400 p-3 flex-wrap">
                <a href="#" class="p-2 mr-4 inline-flex items-center">
                    <svg viewBox="0 0 24 24" xmlns="" class="fill-current text-white h-8 w-8 mr-2">
                        <path/>
                    </svg>
                    <img src="https://i.imgur.com/HFZXYgi.png" className="max-h-10 -translate-x-16"></img>
                    <span class="text-xl text-white font-bold uppercase tracking-wide -translate-x-16">
                        PokePacks 
                    </span>
                </a>
                <button class="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler" data-target="#navigation">
                    <i class="material-icons">menu</i>
                </button>
                <div class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
                    <div class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                        <a href="#" class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-rose-600 hover:text-white">
                            <Link to="/home" className="">Main Page  </Link>
                        </a>
                        <a href="#" class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-rose-600 hover:text-white">
                            <Link to="/gacha" className="">Open Booster Packs! </Link>
                        </a>
                        <a href="#" class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-rose-600 hover:text-white">
                            <Link to="/cards" className="">Card Collection </Link>
                        </a>
                        <a href="#" class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-rose-600 hover:text-white">
                        { this.props.user ?
                            <a href="/logout" className="" onClick={this.handleLogout}>Logout  </a>
                            : <Link to="/authenticate" className="">Login/Sign Up </Link>
                        }
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;