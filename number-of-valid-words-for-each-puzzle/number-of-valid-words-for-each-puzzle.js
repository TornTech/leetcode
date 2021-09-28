/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
    
    // Create a frequency map of each word;
    const wordsFrequencyMap = {};
    words.forEach(word => {
        const wordMask = getMask(word);
        
        if (wordMask in wordsFrequencyMap) {
            wordsFrequencyMap[wordMask]++
        } else {
             wordsFrequencyMap[wordMask] = 1;
        }
    });
    
    // Array that will hold the results
    const results = new Array(puzzles.length).fill(0);
    
    // Go through each puzzle and see how many words map to it
    puzzles.forEach((puzzleWord, puzzleIndex) => {
        const puzzleBitMask = getMask(puzzleWord);
        const firstBitIndex = puzzleWord[0].charCodeAt() - "a".charCodeAt();
        
        let count = 0;
        let submask = puzzleBitMask;
        
        while (submask) {

            if ((submask >> firstBitIndex & 1) && submask in wordsFrequencyMap) {
                count += wordsFrequencyMap[submask];
            }
            
            submask = (submask - 1) & puzzleBitMask;
            
        }
        
        results[puzzleIndex] = count;
        
    })
    
    
    return results;
};

// Helper function that outputs bitmask of a given word
var getMask = function(word) {
    let mask = 0;
    
    for (let i = 0; i < word.length; i++) {
        mask |= 1 << word[i].charCodeAt() - "a".charCodeAt();
    }
    
    return mask;
}
