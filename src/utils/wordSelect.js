/* eslint-disable no-unused-expressions */

const sortWords = (arr) => {
    //the function initializes two array where it will hold the selected words
    const smallWords = []
    const bigWords = []
    //the array input into the function will be iterated through, and words will be filtered based on their length
    arr.map((word) => {
        // words greater than 5 letters long will be pushed into the bigWords array
        word.length > 5 ? bigWords.push(word) :
        // words that are either 4 or 5 letters long will be pushed into the smallWords array, anything with three or less letters is ignored entirely
        word.length === 5 || word.length === 4 ? smallWords.push(word) : null
    })
    return [smallWords, bigWords];
}

const subWord = (short, long) => {
    // a final, empty array is initialized to contain all of the word-set objects
    const finArr = []
    // the outer for loop loops through the entire array of long words
    for (let i = 0; i < long.length; i++) {
        // the inner for loop loops through the entire array of short words, only when every short word has been compared to an individual long word does the program move on to another long word
        for (let j = 0; j < short.length; j++) {
            // because the list I am using contains only unique words I do not have to worry about running into duplicate small words
            // if a short word is found within a long word, it checks to see whether that longword already exists in the final array of word sets
            if(long[i].includes(short[j]) && finArr.find(set => set.longWord === long[i])) {
                // if that long word already exists, the index of its location is found and the short word is pushed to the already existing shortWord array within the object
                let indexOfDupWord = finArr.map(obj => obj.longWord).indexOf(long[i])
                finArr[indexOfDupWord].shortWord.push(short[j])
            // if that long word doesn't already exist, a brand new object is pushed to the array contained the long word and the short word
            } else if (long[i].includes(short[j])) {
                finArr.push({
                    longWord: long[i],
                    shortWord: [short[j]]
                })
            }
        }
    }
    return finArr
}

const pickWordPair = (arr) => {
    // when it is time to pick a new word pair for the days game, a random index is selected for both the word set, and the short words contained within the set (in case there are multiple short words)
    let randomSetIndex = Math.floor(Math.random() * arr.length)
    let randomShortIndex = Math.floor(Math.random() * arr[randomSetIndex].shortWord.length)
    const setOfTheDay = {
        longWord: arr[randomSetIndex].longWord,
        shortWord: arr[randomSetIndex].shortWord[randomShortIndex]
    }
    // the chose set of the day is then removed from the array of options so that there will be no repeats of long words (there may still be repeats of short ones)
    arr.splice(randomSetIndex, 1)
    return [setOfTheDay, arr]
}

module.exports = {
    sortWords,
    subWord,
    pickWordPair
}