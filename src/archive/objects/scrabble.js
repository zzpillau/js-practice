//  испытание Объекты Скреббл

const scrabble = (letters, word) => {
    if (letters.length < word.length) {
        return false
    }
    const lettersObj = {};
    for (const letter of letters.toLowerCase()) {
        lettersObj[letter] = (lettersObj[letter] ?? 0) + 1;
    }
    let count = 0;
    console.log(lettersObj);
    for (const symbol of word.toLowerCase()) {
        if (lettersObj[symbol] > 0) {
            count += 1;
            lettersObj[symbol] -= 1;
        }
    }
    console.log(lettersObj);

    return word.length === count ? true : false;
};

console.log(scrabble('katas', 'steak'));
console.log(scrabble('javaSprint', 'javascript'));
// console.log(scrabble('scriptjavest', 'javascript')); // false
// console.log(scrabble('rkqodlw', 'world')); // true
// console.log(scrabble('avjafff', 'java')); // true
// console.log(scrabble('scriptingjava', 'JavaScript')); // true