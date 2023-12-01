const sorted = (str) => {
    const strToArray = [...str];
    const sortStr = strToArray.sort().join('');
    return sortStr;
};

const filterAnagrams = (word, anagrams) =>  anagrams

    .filter((anagram) => word.length === anagram.length)
    .reduce((acc, item) => {
        if (sorted(word) === sorted(item)) {
            acc.push(item)
        };
        return acc;
    }, [])






console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// ['aabb', 'bbaa']
 
console.log(filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// ['carer', 'racer']
 
console.log(filterAnagrams('laser', ['lazing', 'lazy',  'lacer']));
// []