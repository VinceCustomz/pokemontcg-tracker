const testSeed = require('../../models/base1Seed');

async function seedDB(req, res) {
    const dataBlock = [
        {
          "id": "base1-1",
          "name": "Alakazam",
          "supertype": "Pokémon",
          "subtypes": [
            "Stage 2"
          ],
          "level": "42",
          "hp": "80",
          "types": [
            "Psychic"
          ],
          "evolvesFrom": "Kadabra",
          "abilities": [
            {
              "name": "Damage Swap",
              "text": "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don't Knock Out that Pokémon. This power can't be used if Alakazam is Asleep, Confused, or Paralyzed.",
              "type": "Pokémon Power"
            }
          ],
          "attacks": [
            {
              "name": "Confuse Ray",
              "cost": [
                "Psychic",
                "Psychic",
                "Psychic"
              ],
              "convertedEnergyCost": 3,
              "damage": "30",
              "text": "Flip a coin. If heads, the Defending Pokémon is now Confused."
            }
          ],
          "weaknesses": [
            {
              "type": "Psychic",
              "value": "×2"
            }
          ],
          "retreatCost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedRetreatCost": 3,
          "number": "1",
          "artist": "Ken Sugimori",
          "rarity": "Rare Holo",
          "flavorText": "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000.",
          "nationalPokedexNumbers": [
            65
          ],
          "legalities": {
            "unlimited": "Legal"
          },
          "images": {
            "small": "https://images.pokemontcg.io/base1/1.png",
            "large": "https://images.pokemontcg.io/base1/1_hires.png"
          }
        },
        {
          "id": "base1-2",
          "name": "Blastoise",
          "supertype": "Pokémon",
          "subtypes": [
            "Stage 2"
          ],
          "level": "52",
          "hp": "100",
          "types": [
            "Water"
          ],
          "evolvesFrom": "Wartortle",
          "abilities": [
            {
              "name": "Rain Dance",
              "text": "As often as you like during your turn (before your attack), you may attach 1 Water Energy card to 1 of your Water Pokémon. (This doesn't use up your 1 Energy card attachment for the turn.) This power can't be used if Blastoise is Asleep, Confused, or Paralyzed.",
              "type": "Pokémon Power"
            }
          ],
          "attacks": [
            {
              "name": "Hydro Pump",
              "cost": [
                "Water",
                "Water",
                "Water"
              ],
              "convertedEnergyCost": 3,
              "damage": "40+",
              "text": "Does 40 damage plus 10 more damage for each Water Energy attached to Blastoise but not used to pay for this attack's Energy cost. Extra Water Energy after the 2nd doesn't count."
            }
          ],
          "weaknesses": [
            {
              "type": "Lightning",
              "value": "×2"
            }
          ],
          "retreatCost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedRetreatCost": 3,
          "number": "2",
          "artist": "Ken Sugimori",
          "rarity": "Rare Holo",
          "flavorText": "A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles.",
          "nationalPokedexNumbers": [
            9
          ],
          "legalities": {
            "unlimited": "Legal"
          },
          "images": {
            "small": "https://images.pokemontcg.io/base1/2.png",
            "large": "https://images.pokemontcg.io/base1/2_hires.png"
          }
        },
        {
          "id": "base1-3",
          "name": "Chansey",
          "supertype": "Pokémon",
          "subtypes": [
            "Basic"
          ],
          "level": "55",
          "hp": "120",
          "types": [
            "Colorless"
          ],
          "evolvesTo": [
            "Blissey"
          ],
          "attacks": [
            {
              "name": "Scrunch",
              "cost": [
                "Colorless",
                "Colorless"
              ],
              "convertedEnergyCost": 2,
              "damage": "",
              "text": "Flip a coin. If heads, prevent all damage done to Chansey during your opponent's next turn. (Any other effects of attacks still happen.)"
            },
            {
              "name": "Double-edge",
              "cost": [
                "Colorless",
                "Colorless",
                "Colorless",
                "Colorless"
              ],
              "convertedEnergyCost": 4,
              "damage": "80",
              "text": "Chansey does 80 damage to itself."
            }
          ],
          "weaknesses": [
            {
              "type": "Fighting",
              "value": "×2"
            }
          ],
          "resistances": [
            {
              "type": "Psychic",
              "value": "-30"
            }
          ],
          "retreatCost": [
            "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "3",
          "artist": "Ken Sugimori",
          "rarity": "Rare Holo",
          "flavorText": "A rare and elusive Pokémon that is said to bring happiness to those who manage to catch it.",
          "nationalPokedexNumbers": [
            113
          ],
          "legalities": {
            "unlimited": "Legal"
          },
          "images": {
            "small": "https://images.pokemontcg.io/base1/3.png",
            "large": "https://images.pokemontcg.io/base1/3_hires.png"
          }
        },
    ];
    await dataBlock.forEach(function(cardCache) {
        let card = new testSeed(cardCache);
        card.image_small = cardCache.images.small;
        card.image_large = cardCache.images.large;
        card.save();
    })
}

seedDB();