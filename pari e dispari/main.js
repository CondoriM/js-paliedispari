
let result = 0;
let pardis = prompt('pari o dispari p/d')
let user_n = Number(prompt('inserisci un numero da 0 a 5'));

function ranN(min, max) {  
    numRan = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(numRan);

    result = user_n + numRan
    console.log(result);

    if((result) % 2 == 0){
        if(pardis == 'p'){
            console.log(`hai vinto con = ${result}`);
        } else{
            console.log(`hai perso con = ${result}`);
        }
    }else if((result) % 2 !== 0){
        if(pardis == 'd'){
            console.log(`hai vinto con = ${result}`);
        } else{
            console.log(`hai perso con = ${result}`);
        }
    } else{
        console.log(`pareggio con ${result}`);
    }
  }