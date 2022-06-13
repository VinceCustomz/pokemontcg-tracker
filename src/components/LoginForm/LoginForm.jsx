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
        <div class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-slate-900" >
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

                <form autoComplete="off" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                    {/* <label>Email: </label> */}
                    
                    <input 
                    className="block w-full p-4 text-lg rounded-sm bg-gray-100 mt-12 mb-12 text-black"
                    placeholder="Email"
                    type='text' 
                    name='email' 
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    required />
                    
                    {/* <label>Password: </label> */}
                    
                    <input 
                    className="block w-full p-4 text-lg rounded-sm bg-gray-100 mt-12 mb-12 text-black"
                    placeholder="Password"
                    type='password' 
                    name='password' 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    required />
                    
                    <button 
                    type='submit'
                    className="uppercase block mt-12 mb-12 w-full p-4 text-lg rounded-full bg-rose-400 hover:bg-indigo-600 focus:outline-none">
                      Login
                    </button>
                </form>
                <p className='error-message'>&nbsp;{this.state.error}</p>



                
            </div>
        </div>
    </section>
            </div>
        )
    }
}

export default LoginForm;