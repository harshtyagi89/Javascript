function reverseWordsInSentence(sentence) {
    const words = [];
    let currentWord = "";

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ' || i === sentence.length - 1) {
            if (i === sentence.length - 1) {
                currentWord += sentence[i];
            }
            let reversedWord = "";
            for (let j = currentWord.length - 1; j >= 0; j--) {
                reversedWord += currentWord[j];
            }
            words.push(reversedWord);
            currentWord = "";
        } else {
            currentWord += sentence[i];
        }
    }

    return words.join(' ');
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);