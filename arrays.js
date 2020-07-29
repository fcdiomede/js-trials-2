"use strict";


// 1. printIndices
// Print each item in the list, followed by its index.

//     The output should look like this:
//         apple 0
//         berry 1
//         cherry 2
function printIndices(items) {
  // Replace this with your code
  for (const index in items) {
    console.log(`${items[index]} ${index}`);
  }
}


// 2. everyOtherItem
// Print a list of every other item in `items`
function everyOtherItem(items) {
  const result = [];
  for (const index in items) {
    if (index % 2 === 0) {
      result.push(items[index]);
    }
  }
  console.log(result);
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  return items.sort((a,b) => b - a).slice(-n);
}
