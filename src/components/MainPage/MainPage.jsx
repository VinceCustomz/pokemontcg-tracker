import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MainPage extends Component {
   
  render() {
    return (
      <div className='bg-slate-800 w-screen h-screen' >
        {/* MAIN PAGE  */}
        {/* <br />
        <Link to= "*" className="">BOOSTER PACK SIMULATOR</Link>
        <br />
        <Link to="/cards" className="">CARDS LIST</Link> */}
        {/* <img className='w-1/4 h-1/4 hover:bg' src="https://cdn.shopify.com/s/files/1/0255/2168/4558/products/15868_Alcove_FlipBox_PKM_Arceus_500x.png?v=1644867950"></img> */}


        <div className='grid grid-cols-2 translate-y-60 translate-x-96 w-3/4 bg-slate-800'>
        <div class="p-8 w-96 cursor-pointer rounded-3xl bg-rose-400 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
            <div class="-mb-20 -translate-y-1/2 transform">
              <img src="https://i.imgur.com/xEBirRR.png" alt="Booster Pack" title="Booster Pack" class="mx-auto h-64 transition duration-300 hover:rotate-12 scale-150" />
            </div>
            <div class="text-center">
              <h3 class="text-center text-4xl font-bold m-8">Booster Pack Simulation</h3>
              
            </div>
            
            <div class="text-center">
              <button class="rounded-xl bg-slate-800 px-24 py-2 text-white hover:bg-gray-900 hover:drop-shadow-2xl">
                <Link to= "/gacha" className="">SELECT</Link> </button>
            </div>
          </div>



          <div class="p-8 w-96 cursor-pointer rounded-3xl bg-rose-400 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
            <div class="-mb-20 -translate-y-1/2 transform">
              <img src="https://cdn.shopify.com/s/files/1/0255/2168/4558/products/15868_Alcove_FlipBox_PKM_Arceus_500x.png?v=1644867950" alt="Deckbox" title="Deckbox" class="mx-auto h-64 transition duration-300 hover:rotate-12 scale-125" />
            </div>
            <div class="text-center">
              <h3 class="text-center text-4xl font-bold m-12">Card Collection</h3>
              
            </div>
            
            <div class="text-center">
              <button class="rounded-xl bg-slate-800 px-24 py-2 text-white hover:bg-gray-900 hover:drop-shadow-2xl"><Link to="/cards" className="">SELECT</Link> </button>
            </div>
          </div>

          </div>


      </div>

    )
  }
}

