const mongoose = require('mongoose');

const testSeed = new mongoose.Schema({
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

module.exports = mongoose.model('testSeed', testSeed);