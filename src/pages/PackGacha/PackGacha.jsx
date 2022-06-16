import React, { Component } from "react";
import "./PackGacha.css"



export default class PackGacha extends Component {
  state = {
    card0:
      "https://i.imgur.com/9amq6m6.png",
    card1:
      "https://i.imgur.com/9amq6m6.png",
    card2:
      "https://i.imgur.com/9amq6m6.png",
    card3:
      "https://i.imgur.com/9amq6m6.png",
    card4:
      "https://i.imgur.com/9amq6m6.png",
    card5:
      "https://i.imgur.com/9amq6m6.png",
    card6:
      "https://i.imgur.com/9amq6m6.png",
    card7:
      "https://i.imgur.com/9amq6m6.png",
    card8:
      "https://i.imgur.com/9amq6m6.png",
    card9:
      "https://i.imgur.com/9amq6m6.png",
  };

  handleGacha = async (e) => {
    e.preventDefault();
    // this.setState({ card1: "" });
    try {
      let tempCard1 = this.state.card1;
      const jwt = localStorage.getItem("token");
      //GET request, it will go to server.js > go through app.use('/api/cards') > routes > gacha > router.get('/', gachaCtrl.index) and trigger the INDEX controller in controllers/api/gacha
      
      const cardDataFull = await fetch("/api/gacha", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwt,
        },
      })
      .then((res) => res.json());
      
      console.log(cardDataFull)
  
      this.setState({
        card0: cardDataFull[0].image_large,
        card1: cardDataFull[1].image_large,
        card2: cardDataFull[2].image_large,
        card3: cardDataFull[3].image_large,
        card4: cardDataFull[4].image_large,
        card5: cardDataFull[5].image_large,
        card6: cardDataFull[6].image_large,
        card7: cardDataFull[7].image_large,
        card8: cardDataFull[8].image_large,
        card9: cardDataFull[9].image_large
      });
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  

  render() {
    return (
      <div className="bg-slate-800  max-h-full">
        {/* <h1>PackGacha</h1> */}
        <button className="bg-rose-400 hover:bg-rose-600 text-white font-bold py-2 m-4 px-4 rounded" onClick={this.handleGacha}>
          FLIP CARDS
        </button>

        <div className="grid grid-cols-5 grid-rows-2   bg-slate-800  ">
          <img src={this.state.card0} className="scale-75 transition duration-500 ease-in-out hover:scale-105"></img>
          <img src={this.state.card1} className="scale-75 transition duration-500 ease-in-out hover:scale-105"></img>
          <img src={this.state.card2} className="scale-75 transition duration-500 ease-in-out hover:scale-105"></img>
          <img src={this.state.card3} className="scale-75 transition duration-500 ease-in-out hover:scale-105"></img>
          <img src={this.state.card4} className="scale-75 transition duration-500 ease-in-out hover:scale-105"></img>
          <img src={this.state.card5} className="scale-75 transition duration-500 ease-in-out hover:scale-105"></img>
          <img src={this.state.card6} className="scale-75 transition duration-500 ease-in-out hover:scale-105"></img>
          <img src={this.state.card7} className="scale-75 transition duration-500 ease-in-out hover:scale-105"></img>
          <img src={this.state.card8} className="scale-75 transition duration-500 ease-in-out hover:scale-105"></img>
          <img src={this.state.card9} className="scale-75 transition duration-500 ease-in-out hover:scale-105"></img>
        </div>

        
        
      </div>
    );
  }
}
