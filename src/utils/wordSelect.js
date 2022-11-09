const arr = [
    'one',
    'twoo',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'superthreeridiculous',
    'crafourzy',
    'grafivein',
    'creafourfivetive',
    'asasevendlfjoneaslfivedghsdlfourfourfourfour',
    'crea',
    'threeeeeeeeeeeeeeee',
    'threeeetwooeee'
]

    const smallWords = []
    const bigWords = []

    const finArr = []

    const sortWords = (arr) => {
        // eslint-disable-next-line array-callback-return
        arr.map((word) => {
            // eslint-disable-next-line no-unused-expressions
            word.length > 5 ? bigWords.push(word) :
            word.length === 5 || word.length === 4 ? smallWords.push(word) : null
        })
        subWord(bigWords, smallWords)
    }

    const subWord = (long, short) => {
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            //Because the list I am using contains only unique words I do not have to worry about running into duplicate small words
            let dupBigWord = finArr.find(word => word.longWord === long[i])
            if(long[i].includes(short[j]) && !dupBigWord) {
                finArr.push({
                    longWord: long[i],
                    shortWord: [short[j]]
                })
            } else if (long[i].includes(short[j]) && dupBigWord) {
                let indexOfDupWord = finArr.map(obj => obj.longWord).indexOf(long[i])
                finArr[indexOfDupWord].shortWord.push(short[j])
            }
        }
    }
    return finArr
}

const pickWordPair = (arr) => {
  let randomSetIndex = Math.floor(Math.random() * arr.length)
  let randomShortIndex = Math.floor(Math.random() * arr[randomSetIndex].shortWord.length)
    const setOfTheDay = {
        longWord: arr[randomSetIndex].longWord,
        shortWord: arr[randomSetIndex].shortWord[randomShortIndex]
    }
    finArr.splice(randomSetIndex, 1)
    return setOfTheDay
}

sortWords(arr)

const todaySet = pickWordPair(finArr)