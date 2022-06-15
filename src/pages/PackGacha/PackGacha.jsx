import React, { Component } from "react";

export default class PackGacha extends Component {
  state = {
    card0:
      "https://i5.walmartimages.com/asr/0a32d419-d745-45c0-b367-927f43a0b9fb.bd571c5c075cece9f4893f1cf10926c4.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
    card1:
      "https://i5.walmartimages.com/asr/0a32d419-d745-45c0-b367-927f43a0b9fb.bd571c5c075cece9f4893f1cf10926c4.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
    card2:
      "https://i5.walmartimages.com/asr/0a32d419-d745-45c0-b367-927f43a0b9fb.bd571c5c075cece9f4893f1cf10926c4.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
    card3:
      "https://i5.walmartimages.com/asr/0a32d419-d745-45c0-b367-927f43a0b9fb.bd571c5c075cece9f4893f1cf10926c4.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
    card4:
      "https://i5.walmartimages.com/asr/0a32d419-d745-45c0-b367-927f43a0b9fb.bd571c5c075cece9f4893f1cf10926c4.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
    card5:
      "https://i5.walmartimages.com/asr/0a32d419-d745-45c0-b367-927f43a0b9fb.bd571c5c075cece9f4893f1cf10926c4.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
    card6:
      "https://i5.walmartimages.com/asr/0a32d419-d745-45c0-b367-927f43a0b9fb.bd571c5c075cece9f4893f1cf10926c4.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
    card7:
      "https://i5.walmartimages.com/asr/0a32d419-d745-45c0-b367-927f43a0b9fb.bd571c5c075cece9f4893f1cf10926c4.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
    card8:
      "https://i5.walmartimages.com/asr/0a32d419-d745-45c0-b367-927f43a0b9fb.bd571c5c075cece9f4893f1cf10926c4.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
    card9:
      "https://i5.walmartimages.com/asr/0a32d419-d745-45c0-b367-927f43a0b9fb.bd571c5c075cece9f4893f1cf10926c4.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
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
        card0: cardDataFull[0].image_small,
        card1: cardDataFull[1].image_small,
        card2: cardDataFull[2].image_small,
        card3: cardDataFull[3].image_small,
        card4: cardDataFull[4].image_small,
        card5: cardDataFull[5].image_small,
        card6: cardDataFull[6].image_small,
        card7: cardDataFull[7].image_small,
        card8: cardDataFull[8].image_small,
        card9: cardDataFull[9].image_small
      });
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  render() {
    return (
      <div>
        <h1>PackGacha</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 m-2 px-4 rounded" onClick={this.handleGacha}>
          FLIP CARDS
        </button>

        <div class="grid grid-cols-5 grid-rows-2 gap-y-5 m-3 content-center">
          <img src={this.state.card0}></img>
          <img src={this.state.card1}></img>
          <img src={this.state.card2}></img>
          <img src={this.state.card3}></img>
          <img src={this.state.card4}></img>
          <img src={this.state.card5}></img>
          <img src={this.state.card6}></img>
          <img src={this.state.card7}></img>
          <img src={this.state.card8}></img>
          <img src={this.state.card9}></img>
        </div>
      </div>
    );
  }
}
 