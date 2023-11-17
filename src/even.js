import readlineSync from 'readline-sync';

const randomNum = (maxNum) => {return Math.floor(Math.random() * maxNum)}



const isEven = (num) => num % 2 === 0;

const brainEven = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    
    for (let i = 0; i < 3; i++) {

        const generatedNum = randomNum(20);
        
        console.log(`Question: ${generatedNum}`);
        let answer = readlineSync.question('Your answer: ');
       
        const correctAnswer = 'Correct!';
        const answerCheck = isEven(generatedNum) ? 'yes' : 'no';
        const wrongAnswer = `'${answer}' is wrong answer ;(. Correct answer was '${answerCheck}'.`;
       
        const correctEven = isEven(generatedNum) && answer === 'yes';
        const correctNotEven = !isEven(generatedNum) && answer === 'no';
        
        if (correctEven || correctNotEven) {
            console.log(correctAnswer);
        } else {
            console.log(wrongAnswer);
            return `Let's try again, ${name}!`;
        }
    }
    return `Congratulations, ${name}`;
};

console.log(brainEven());


