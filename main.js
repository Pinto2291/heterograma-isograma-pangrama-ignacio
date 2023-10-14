// Heterograma - un string donde las letras no se repiten ni una sola vez

function isHeterogram(str) {
    let count = {};
    let repeats = [];
    
    for (let i = 0; i < str.length; i++) {
        if(str[i] !== ' ' && str[i].match(/[a-zA-Z]/)) {
            let letter = str[i].toLowerCase();
                if (count[letter]) {
                count[letter]++;
            }  else {
                count[letter] = 1;
            }
        }
    }

    for (let letter in count) {
        if (count[letter] > 1) {
            repeats.push(`${letter} (${count[letter]} times)`);
        }
    }

    if (repeats.length > 0) {
        return `The string "${str}" is not a heterogram. The following letters repeat: ${repeats.join(", ")}.`;
    } else {
        return `The string "${str}" is a heterogram because none of the letters repeat.`;
    }
}

console.log(isHeterogram('coña')); // no es heterograma
console.log(isHeterogram('hello this is not an heterogram')); // si es heterograma

// Isograma - un string en donde al menos una letra se repite una vez

function isIsogram(str) {
    let count = {};
    let repeats = [];
    
    for (let i = 0; i < str.length; i++) {
        let letter = str[i].toLowerCase();
    if (count[letter]) {
        count[letter]++;
    } else {
        count[letter] = 1;
    }
}

for (let letter in count) {
        if (count[letter] > 1) {
            repeats.push(letter);
        }
    }

    if (repeats.length > 0) {
        return `The string "${str}" is an isogram. The following letters repeat: ${repeats.join(", ")}.`;
    } else {
        return `The string "${str}" is not an isogram because any letter repeat itself.`;
    }
}


console.log(isIsogram('hello everyone'));
console.log(isIsogram('hola'));

// Pangrama - un string en donde aparecen todas las letras del alfabeto

function isPangram(str) {
    let alphabet = "abcdefghijklmnñopqrstuvwxyz";
    let missingLetters = "";
    
    for (let i = 0; i < alphabet.length; i++) {
      if (!str.toLowerCase().includes(alphabet[i])) {
        missingLetters += alphabet[i];
      }
    }
    
    if (missingLetters.length > 0) {
      return `The string "${str}" is not a pangram. The following letters are missing: ${missingLetters}.`;
    } else {
      return `The string "${str}" is a pangram.`;
    }
  }
  

console.log(isPangram('Waltz, bad nymph, for quick jigs vexñ'))
console.log(isPangram('hello how are you'))

/*
  function isHeterogram(str) {
    // Create an array to store the count of each letter
    let count = new Array(26).fill(0);
    
    // Traverse the string and update the count of each letter
    for (let i = 0; i < str.length; i++) {
      // Ignore spaces and non-letter characters
      if (str[i] !== ' ' && str[i].match(/[a-zA-Z]/)) {
        // Convert the letter to lowercase and update the count
        let index = str[i].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
        count[index]++;
        
        // If a letter occurs more than once, return false
        if (count[index] > 1) {
          return false;
        }
      }
    }
    
    // If all letters occur only once, return true
    return true;
  }
  */