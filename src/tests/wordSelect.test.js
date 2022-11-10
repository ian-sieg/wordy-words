const {sortWords, subWord, pickWordPair} = require('../utils/wordSelect')

describe('sortWords', () => {
    it('should sort words into two groups, 4-5 letters long or longer than 5', () => {
        const testArr = [
            'twoo',
            'three',
            'four',
            'five',
            'superthreeridiculous',
            'crafourzy',
            'grafivein',
            'creafourfivetive',
            'asasevendlfjoneaslfivedghsdlfourfourfourfour',
            'threeeeeeeeeeeeeeee',
            'threeeetwooeee'
        ]
        const shortWordsTest = [
            'twoo',
            'three',
            'four',
            'five'
        ]
        const longWordsTest = [
            'superthreeridiculous',
            'crafourzy',
            'grafivein',
            'creafourfivetive',
            'asasevendlfjoneaslfivedghsdlfourfourfourfour',
            'threeeeeeeeeeeeeeee',
            'threeeetwooeee'
        ]
        const resultArr = sortWords(testArr)
        expect(resultArr[0]).toEqual(shortWordsTest)
        expect(resultArr[1]).toEqual(longWordsTest)
    })

    it('should ignore words under 4 letters long', () => {
        const testArr = [
            'one',
            'two',
            'three',
            'fourrrrrrr'
        ]
        const shortWordsTest = [
            'three'
        ]
        const longWordsTest = [
            'fourrrrrrr'
        ]
        const resultArr = sortWords(testArr)
        expect(resultArr[0]).toEqual(shortWordsTest)
        expect(resultArr[1]).toEqual(longWordsTest)
    })
})

describe('subWord', () => {
    it('should identify shorter words contained within longer ones and return an array of objects, each with a long word and a short word', () => {
        const shortWordsTest = [
            'three',
            'four',
            'five',
            'seven'
        ]
        const longWordsTest = [
            'superthreeridiculous',
            'crafourzy'
        ]
        const wordSetObj = [
            {
                longWord: 'superthreeridiculous',
                shortWord: ['three']
            },
            {
                longWord: 'crafourzy',
                shortWord: ['four']
            }
        ]
        const result = subWord(shortWordsTest, longWordsTest)
        expect(result).toEqual(wordSetObj)
    })

    it('should only create objects with unique long words, adding multiple short words to an array associated with their common long word', () => {
        const shortWordsTest = [
            'three',
            'four',
            'five',
            'super'
        ]
        const longWordsTest = [
            'superthreeridiculous',
            'crafourfivezy'
        ]
        const wordSetObj = [
            {
                longWord: 'superthreeridiculous',
                shortWord: ['three', 'super']
            },
            {
                longWord: 'crafourfivezy',
                shortWord: ['four','five']
            }
        ]
        const result = subWord(shortWordsTest, longWordsTest)
        expect(result).toEqual(wordSetObj)
    })
})

const jestMath = Object.create(global.Math)
jestMath.random = () => 0.5
global.Math = jestMath

describe('pickWordPair', () => {
    it('should pick a random object from an array of objects, in this case using a predicted Math.random' , () => {
        const wordSetObj = [
            {
                longWord: 'superthreeridiculous',
                shortWord: ['three']
            },
            {
                longWord: 'crafourfivezy',
                shortWord: ['four']
            },
            {
                longWord: 'randomfiveword',
                shortWord: ['five']
            }
        ]
        const expectedObj = {
            longWord: 'crafourfivezy',
            shortWord: 'four'
        }
        const result = pickWordPair(wordSetObj)
        
        expect(result[0]).toEqual(expectedObj)
    })
    
    it('should pick a random short word if the object contains multiple options, this case using a predicted Math.random', () => {
        const wordSetObj = [
            {
                longWord: 'superthreeridiculous',
                shortWord: ['three']
            },
            {
                longWord: 'crafourfivezy',
                shortWord: ['four', 'five', 'craf']
            },
            {
                longWord: 'randomfiveword',
                shortWord: ['rando']
            }
        ]
        const expectedShortWord = 'five'
        const result = pickWordPair(wordSetObj)

        expect(result[0].shortWord).toEqual(expectedShortWord)
    })

    it('should remove the object that was selected from the returned array of potential future options, this case using a predicted Math.random', () => {
        const wordSetObj = [
            {
                longWord: 'superthreeridiculous',
                shortWord: ['three']
            },
            {
                longWord: 'crafourfivezy',
                shortWord: ['four', 'five', 'craf']
            },
            {
                longWord: 'randomfiveword',
                shortWord: ['rando']
            }
        ]
        const expectedResultArr = [
            {
                longWord: 'superthreeridiculous',
                shortWord: ['three']
            },
            {
                longWord: 'randomfiveword',
                shortWord: ['rando']
            }
        ]
        const result = pickWordPair(wordSetObj)
        
        expect(result[1]).toEqual(expectedResultArr)
    })
})