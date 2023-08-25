
const inputWord = prompt('enter you word :');

function calculateScrabbleScore(word) {
    const letters = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T', 'D', 'G', 'B', 'C', 'M', 'P', 'F', 'H', 'V', 'W', 'Y', 'K', 'J', 'X', 'Q', 'Z'];
    const values = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 8, 8, 10, 10];
    
    let score = 0;
    word = word.toUpperCase();
  
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      const index = letters.indexOf(letter); 
      
      if (index !== -1) {
        score += values[index]; 
      }
    }
  
    return score;
  }
  console.log(calculateScrabbleScore(inputWord));
  
  