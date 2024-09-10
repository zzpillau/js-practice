class Random {
    
    constructor(seed) {
        this.initial = seed;
        this.seed = seed;
    }


    #lcg(seed) {
        const M = Math.pow(2, 32);
        const A = 1103515245;
        const C = 12345;
    
        let x = seed % M;
    
        return () => {
            x = (A  *  x + C) % M;
            return x / M;
        };
    }

    getNext() {
        const random = this.#lcg(this.seed);
        this.seed = random();
        return random();
    }


    reset() {
        this.seed = this.initial;
    }


}




const seq = new Random(100);

const result1 = seq.getNext();
const result2 = seq.getNext();

result1 !== result2; // true

console.log(result1);
console.log(result2);



console.log(result1 !== result2);

seq.reset();

console.log('seed', seq.getSeed());
 

const result21 = seq.getNext();
const result22 = seq.getNext();



result1 === result21; // true
result2 === result22; // true

console.log(result1 === result21);
console.log(result2 === result22);



