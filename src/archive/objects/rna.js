
const dnaToRna = (dna) => {
    const  valueMatching = {G: 'C', C: 'G', T: 'A', A: 'U'};
    const dnaToArray = dna.split('');
    const rna = [];
    for (const item of dnaToArray) {
        if(!Object.hasOwn(valueMatching, item)) {
            return null;
        }
        rna.push(valueMatching[item]);
    }
    return rna.join('');
};

console.log(dnaToRna('ACGTGGTCTTAA')); // 'UGCACCAGAAUU'
console.log(dnaToRna('CCGTA')); // 'GGCAU'
console.log(dnaToRna('')); // ''
console.log(dnaToRna('ACNTG')); // null
