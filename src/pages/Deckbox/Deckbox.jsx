import React from "react";
import CardSearch from "../../components/CardSearch/CardSearch";

class Deckbox extends React.Component {
    state = {
        cards: [],
        cardID: "",
    }

    getCards = async () => {
        try {
            const jwt = localStorage.getItem('token')
            const cardList = await fetch('/api/cards', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwt
                }
            }).then(res => res.json());
            this.setState({ cards: cardList });
        } catch (err) {
            console.error("Error:", err);
        }
    }

    componentDidMount = async () => {
        this.getCards()
    }

    handleDelete = async (e) => {
        e.preventDefault();
        try {
            const jwt = localStorage.getItem('token')
            await this.setState({cardID: e.currentTarget.id})
            let options = {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwt
                },
            };
            await fetch(`/api/cards/${this.state.cardID}`, options)
            .then(res => {
                if (res.status === 200) {
                    this.getCards();
                } else {
                    console.error("Error code " + res.status);
                }
            })
        } catch (err) {
            console.error("Error:", err); 
        }
    }

    render() {
        console.log(this.state.cards);
        return(
            <div className='center-div'>
                <CardSearch getCards={this.getCards}/>
                <table>
                    <tbody>
                        <tr className="table-headers table-bottom-border">
                            <th className="table-header-right">Delete</th>
                            <th className="table-header-right">Quantity</th>
                            <th className="table-header-right">Card Name</th>
                            <th className="table-header-right">Set ID</th>
                            <th>Rarity</th>
                        </tr>
                        {this.state.cards.length ? 
                            this.state.cards.map(card => (
                                <tr>
                                    <td>
                                        <button id={card._id} className="delete-button" type="submit" onClick={this.handleDelete}>X</button>
                                    </td>
                                    <td>{card.quantity}</td>
                                    <td>{card.name}</td>
                                    <td>{card.set_id}</td>
                                    <td>{card.rarity}</td>
                                </tr>
                            ))
                            : <p>No Cards!</p>}
                    </tbody>
            </table>

            
            <div class="w-screen h-screen flex justify-center items-center">
                    
                    <div class="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white">
                        <div class="py-10 px-6 text-center tracking-wide grid grid-cols-1 gap-6">
                        {this.state.cards.length ? 
                            this.state.cards.map(card => (
                                <tr>
                                <div class="relative mb-6  w-full " >
                                    <img className="w-full h-full " src={card.image_large} ></img>
                            
                                </div>
                                    
                                    
                                    <button id={card._id} className="delete-button" type="submit" onClick={this.handleDelete}>X</button>
                                    - {card.quantity} -
                                    {card.name} -
                                    {card.rarity} 
                                </tr>
                            ))
                            : <p>No Cards!</p>}
                            
                            {/* <div class="posts">
                                <p class="text-lg">324</p>
                                <p class="text-gray-400 text-sm">Posts</p>
                            </div>
                            <div class="followers">
                                <p class="text-lg">7542</p>
                                <p class="text-gray-400 text-sm">Followers</p>
                            </div>
                            <div class="following">
                                <p class="text-lg">295</p>
                                <p class="text-gray-400 text-sm">Following</p>
                            </div> */}
                        </div>
                    </div>
                    </div>
        </div>
        )
    }
}

export default Deckbox;
