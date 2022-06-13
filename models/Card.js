const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new mongoose.Schema({
    id: String, // id
    name: String, // name
    hp: Number, // hp
    supertype: String, // supertype
    subtypes: [], // subtypes
    types: [], // types
    set_id: String, // set.id
    set_name: String, // set.name
    set_series: String, // set.series
    abilities: [], // abilities
    attacks: [], // attacks
    rarity: String, // rarity
    image_small: String, // images.small
    image_large: String, // images.large
    market_price: Number, // tcgplayer.prices.normal.market
    quantity: {
        type: Number,
        default: 1,
    }
}, {
    timestamps: false
});

module.exports = mongoose.model('Card', cardSchema);