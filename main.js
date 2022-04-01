const word = 'anna'

let wordSplit = word.split('');
console.log(wordSplit);

wordSplit = wordSplit.reverse();
console.log(wordSplit);

let reverseWord = wordSplit.join('');
console.log(reverseWord);

if(word == reverseWord){
    console.log('la parola è palindroma');
} else{
    console.log('la parola non è palindroma');
}