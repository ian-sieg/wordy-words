const wordSelect = require('../utils/wordSelect')

describe('wordSelect', () => {
    describe('sortWords', () => {
        it('should sort words into two groups, 4-5 letters long or longer than 5. It should ignore words under 4 letters long', () => {
            const testArr = [
                'one',
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
            ];

            const shortWords = [
                'twoo',
                'three',
                'four',
                'five'
            ]

            const longWords = [
                'superthreeridiculous',
                'crafourzy',
                'grafivein',
                'creafourfivetive',
                'asasevendlfjoneaslfivedghsdlfourfourfourfour',
                'threeeeeeeeeeeeeeee',
                'threeeetwooeee'
            ]
        })
    })
})