const Card = require('../../models/card');
const User = require('../../models/user');

module.exports = {
    index,
    create,
    delete: deleteOne,
}

async function index(req, res) {
    try {
        const cards = await User.findById(req.user._id).populate('cards').sort({ name: 'asc' }).exec();
        res.status(200).json(cards.cards);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function create(req, res) {
    try {
        console.log("got to the create func");
        const cardCache = req.body.card.data;
        console.log(cardCache);
        let query = { set_id: cardCache.set.id , name: cardCache.name };
        Card.findOne(query, function(err, found) {
            if (found === null) {
                Card.create(cardCache, function(err, card){
                    card.set_id = cardCache.set.id;
                    card.set_name = cardCache.set.name;
                    card.set_series = cardCache.set.series;
                    card.image_small = cardCache.images.small;
                    card.image_large = cardCache.images.large;
                    card.save();
                    User.findById(req.user._id).exec(function(err, user){
                        user.cards.push(card);
                        user.save();
                        console.log("New card item created");
                    });
                });
            } else { // The card is found
                console.log("userid: " + req.user._id);
                User.findById(req.user._id).populate('cards').exec(function(err, user){ // Find the user and populate
                    let needNew = true;
                    user.cards.forEach(function(err, idx){
                        let card = user.cards[idx];
                        if (card.set === cardCache.set && card.collector_number === cardCache.collector_number && card.name === cardCache.name){
                            card.quantity++;
                            card.save();
                            needNew = false;
                            console.log("Dupe counted");
                        };
                    });
                    if (needNew) {
                        Card.create(cardCache, function(err, card){
                            card.set_id = cardCache.set.id;
                            card.set_name = cardCache.set.name;
                            card.set_series = cardCache.set.series;
                            card.image_small = cardCache.images.small;
                            card.image_large = cardCache.images.large;
                            card.save();
                            User.findById(req.user._id).exec(function(err, user){
                                user.cards.push(card);
                                user.save();
                                console.log("New to user card created");
                            });
                        });
                    };
                });
            };
        });
        res.sendStatus(201);
    } catch (error) {
        res.status(400).json(error);
    }
}

async function deleteOne(req, res) {
    try {
        Card.findByIdAndDelete(req.params.id, (err, card) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Deleted " + card._id)
            }
        });
        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(400);
    }
}