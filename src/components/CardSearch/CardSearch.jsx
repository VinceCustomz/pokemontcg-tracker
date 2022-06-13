import React from 'react';
import { getCardData } from '../../services/pokemonTCGApi';

class CardSearch extends React.Component {
    state = {
        cardID: '',
        card: '',
        cards: [],
    };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({card: ""});
        try {
            let cardID = this.state.cardID;
            const cardData = await getCardData(cardID);
            console.log(cardData);
            this.setState({card: cardData, cardID: ''});
        } catch(err) {
            console.error("Error:", err);
        }
    };

    handleAdd = async (e) => {
        e.preventDefault();
        try {
            const jwt = localStorage.getItem('token')
            const body = { card: this.state.card }
            let options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwt
                },
                body: JSON.stringify(body)
            };
            await fetch('/api/cards', options)
            .then(res => {
                if (res.status === 201) {
                    this.props.getCards();
                } else {
                    console.error("Error code " + res.status + ": " + res.json());
                }
            })
        } catch (err) {
            console.error("Error:", err);
        }
    }

    displayCard() {
        if (this.state.card.data) {
            let card = this.state.card.data;
            return (
                <p> 
                    <span><strong>Name: </strong>{card.name}</span><br/>
                    <span><strong>HP: </strong>{card.hp}, <strong>Set ID: </strong>{card.set.id}, <strong>Rarity: </strong>{card.rarity}</span><br/>
                    <span><strong>Set Name: </strong>{card.set.name}, <strong>Set Series:  </strong>{card.set.series}</span><br/>
                </p>
            )
        } else if (this.state.card.error) {
            return (
                <p>No card with that name has been found.</p>
            )
        } else {
            return (
                <p>Please search for a card.</p>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="center-div">
                    <form action="/home" method="GET">
                        <h1 className="text-center">Pokemon TCG Searcher</h1>
                        <div className="search-group">
                            <label className="search-label" htmlFor="name">Card ID</label>
                            <input type="text" 
                                name="cardID" 
                                className="block" 
                                placeholder="Enter a Card ID" 
                                value={this.state.cardID} 
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="search-group-button">
                            <button className="button block" type="submit" onClick={this.handleSubmit}>Search</button>
                        </div>
                        <div className="add-button">
                            <button className="button block" type="submit" onClick={this.handleAdd}>Add Card</button>
                        </div>
                    </form>
                </div>
                <div className="search-results">
                    {this.displayCard()}
                </div>
            </div>
        )
    }
};

export default CardSearch;