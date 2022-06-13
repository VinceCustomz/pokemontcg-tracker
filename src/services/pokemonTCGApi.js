export function getCardData(cardID) {
    let reqURL;
    reqURL = `https://api.pokemontcg.io/v2/cards/${cardID}`;
    return fetch(reqURL).then(res => res.json());
}