"use strict";


// 1. countWords

// """Return a dictionary of each word and the no. of times they appear.

// You can assume that `phrase` does not contain any punctuation and that
// each word is separated with a space.

// Arguments:
//     phrase (str): A string of space-separated words

// Returns:
//     dict: {word: # of times word appears in `phrase`}
// """

// word_counts = {}

// for word in phrase.split(' '):
//     if word in word_counts:
//         word_counts[word] += 1;
//     else:
//         word_counts[word] = 1;

// return word_counts

function countWords(phrase) {

  const wordCounts = {};

  for (const word of phrase.split(' ')) {
    console.log(word);
    // console.log(countWords.word = word);
    // console.log(countWords[word] = word);
    console.log(wordCounts.hasOwnProperty[word]);

    // if (wordCounts[word]) {
    // if (wordCounts.hasOwnProperty(word)) {
    //   wordCounts.word += 1;
    // }
    // else {
    //   wordCounts.word = 1;
    // }
  } return wordCounts
}

console.log(countWords('Hello world. Beautiful world.'))


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
}
