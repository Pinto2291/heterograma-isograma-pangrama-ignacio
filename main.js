/* Text Area */
let text_area_heterogram = document.getElementById('heterogram-area');
let text_area_isogram = document.getElementById('isogram-area');
let text_area_pangram = document.getElementById('pangram-area');

/* Button */
let button_heterogram = document.getElementById('heterogram-button');
let button_isogram = document.getElementById('isogram-button');
let button_pangram = document.getElementById('pangram-button');

/* Result */
let heterogram_result = document.getElementById('heterogram-result');
let isogram_result = document.getElementById('isogram-result');
let pangram_result = document.getElementById('pangram-result');

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
            repeats.push(`${letter} (${count[letter]} veces)`);
        }
    }

    if (repeats.length > 0) {
        return `La string (cadena de texto) "${str}" no es un Heterograma. Las siguientes letras se repiten: ${repeats.join(", ")}.`;
    } else {
        return `El string "${str}" es un heterograma porque ninguna de las letras se repiten.`;
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
        return `El string "${str}" es un isograma. Las siguientes letras se repiten: ${repeats.join(", ")}.`;
    } else {
        return `El string "${str}" no es un isograma porque ninguna letra se repite.`;
    }
}


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
      return `El string "${str}" no es un pangrama. Las siguientes letras estan faltando: ${missingLetters}.`;
    } else {
      return `El string "${str}" es un pangrama.`;
    }
}


button_heterogram.addEventListener('click', () => {
    if(text_area_heterogram.value !== ''){
        heterogram_result.innerText = isHeterogram(text_area_heterogram.value);
    }
})

button_isogram.addEventListener('click', () => {
    if(text_area_isogram.value !== ''){
        isogram_result.innerText = isIsogram(text_area_isogram.value);
    }
})

button_pangram.addEventListener('click', () => {
    if(text_area_pangram.value !== ''){
        pangram_result.innerText = isPangram(text_area_pangram.value);
    }
})