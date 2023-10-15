// Code your solutions in this file
for (let age = 30; age < 40; age++) {
console.log(`I'm ${age} years old. Happy Birthday to me!`)

}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

const cards = ["Kim", "Tricia", "Joi"];

function writeCards(cards, Birthday) {
    let messagesArray = [];
    for (let i = 0; i < cards.length; i++) {
      messagesArray.push(`Thank you, ${cards[i]}, for the wonderful ${Birthday} gift!`);
    }
    return messagesArray;
  }
  
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }