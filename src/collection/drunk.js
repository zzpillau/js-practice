class Drunkard {
  constructor () {
    this.cards1 = cards1;
    this.cards2 = cards2;
  }

  run(cards1, cards2) {
    let deck1 = [...cards1];
    let deck2 = [...cards2];
    let winRound = [0];




    // winRound.forEach((round, i) => { 

      if (winRound > 100) {
        return 'Botva!';
      }

  
      winRound.push(i + 1);

      const [current1, ...rest1] = deck1;
      const [current2, ...rest2] = deck2;
  
      console.log(deck1, deck2);

      const card1 = current1

      const card2 = current2;

      console.log(i, 'card1', card1, 'card2', card2);
      
      if (card1 === card2) {
        console.log('card1 === card2', card1 === card2);
        
        deck1 = [...rest1];
        deck2 = [...rest2];
      }
      if (card1 > card2) {

        console.log('card1 > card2', card1 > card2);
        
        deck1 = [...rest1, current1, card2];
        deck2 = [...rest2];
      }

      if (card1 < card2) {

      console.log('card1 < card2', card1 < card2);


      deck1 = [...rest1];
      deck2 = [...rest2, current2, card1];
    }

    })

    console.log(deck1, deck2);
    console.log(winRound);
    


    if (deck1.length === 0 && deck2.length !== 0) {
      return `Second player. Round: ${winRound}`;
    }

    if (deck2.length === 0 && deck1.length !== 0) {
      return `First player. Round: ${winRound}`;
    }

    if (deck1.length === deck2.length) {
      return `Botva!`;
    }
  }
}


const cards1 = [1, 3];
const cards2 = [2, 1];

const game = new Drunkard();
console.log(game.run(cards1, cards2));
