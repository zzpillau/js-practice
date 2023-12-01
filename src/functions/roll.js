
const rollDie = (min = 1, max = 6) => Math.floor(min + Math.random() * (max + 1 - min));

let result = [];

    const resultsInArray = (start, end, item) => {

        if(start === end){
            return result;
        }else{
            start += 1;
            result.push(item);
            resultsInArray(start, end, item);
        }
    }

const displayHistogram = (roundsCount, rollDie) => {

    const die = rollDie();
    console.log(die);
    resultsInArray(0, roundsCount, die);
    console.log(result);

    return result;

}


console.log(displayHistogram(32, rollDie));
