const Seed = require('./models/Seeding');

function seedDB(req, res) {
    const dataBlock = [];
    dataBlock.forEach(function(card) {
        Seed.create(card, function(err, entry) {
            entry.image_small = card.images.small;
            entry.image_large = card.images.large;
            entry.save();
        })
    })
}