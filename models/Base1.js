const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const base1Schema = new mongoose.Schema({
    id: String, // id
    name: String, // name
    hp: Number, // hp
    supertype: String, // supertype
    subtypes: [], // subtypes
    types: [], // types
    abilities: [], // abilities
    attacks: [], // attacks
    rarity: String, // rarity
    image_small: String, // images.small
    image_large: String, // images.large
}, {
    timestamps: false
});

module.exports = mongoose.model('Base1', base1Schema);