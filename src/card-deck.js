const getDeck = function () {
  const cardType = ['H', 'D', 'S', 'C'];
  const cardNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'A', 'K', 'Q', 'J'];
  return cardNumbers
    .map((number) => cardType.map((type) => `${number}${type}`))
    .flat();
};

const shuffle = function (cardList) {
  const cards = cardList.slice();
  for (let index = 0; index < cards.length; index++) {
    let randomIndex = Math.floor(Math.random() * cards.length);
    [cards[randomIndex], cards[index]] = [cards[index], cards[randomIndex]];
  }
  return cards;
};

const getRandomCards = function (noOfCards) {
  const deck = getDeck();
  const cards = [];
  while (cards.length < noOfCards) {
    const index = Math.floor(Math.random() * deck.length);
    if (!cards.includes(deck[index])) cards.push(deck[index]);
  }
  return cards;
};

const getCards = function (noOfCards) {
  const randomCards = getRandomCards(noOfCards / 2);
  return shuffle(randomCards.concat(randomCards));
};

export {getCards};
