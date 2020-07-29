"use strict";


// 1. countWords
// Return a dictionary of each word and the no. of times they appear.

//     You can assume that `phrase` does not contain any punctuation and that
//     each word is separated with a space.

function countWords(phrase) {
  // Replace this with your code
  const wordCounts = {};
  const words = phrase.split(' ');
  for (const word of words) {
    if (!wordCounts[word]) {
      wordCounts[word] = 1;
    } else {
      wordCounts[word] += 1;
    }
  }
  return wordCounts
}


// 2. getMelonsAtPrice
// Return the list of melons that cost `price`.

//     Arguments:
//         price (float)

//     Returns:
//         list: List of melons that cost `price`
//         None: If there are no melons that cost `price`
//     """

//     melon_prices = {
//         2.50: ['Cantaloupe', 'Honeydew'],
//         2.95: ['Watermelon'],
//         3.25: ['Musk', 'Crenshaw'],
//         14.25: ['Christmas']
//     }
function getMelonsAtPrice(price) {
  // Replace this with your code
  const melonPrices = {
            2.50: ['Cantaloupe', 'Honeydew'],
            2.95: ['Watermelon'],
            3.25: ['Musk', 'Crenshaw'],
            14.25: ['Christmas']
        }
  if (!melonPrices[price]) {
    return;
  } 
  return melonPrices[price].sort();
}
