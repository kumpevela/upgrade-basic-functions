/* function sum(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        console.log(numberOne)
    }
    if (numberTwo > numberOne) {
        console.log(numberTwo)
    }
}

sum (2,9); */

/* 
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord (nombre) {
    let longestWord = nombre[0];
    
    for (let i = 0; i < nombre.length; i++) {
        if (nombre[i].length > longestWord.length) {
            longestWord = nombre[i]
        }
       
    }
   return(longestWord) 
}
console.log(findLongestWord(avengers)); */



/* 
const numbers = [1, 2, 3, 5, 45, 37, 58];
let sum = 0

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]    
}


console.log(sum)





const other = [4,5,12,288];
let count = 0;

for (let i = 0; i < other.length; i++) {
    count = count + other[i];
}
let promedio = count / other.length;

console.log(promedio) */




/* const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
  function averageWord(param) {
    
    let count = 0;

    for (let i = 0; i < param.length; i++) {
        if(typeof param[i] === "string"){
            count += param[i].length
        } else { 
            count += param[i];
         }
    }
    return count
  }

  console.log(averageWord(mixedElements));
 */


/*   const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    
    let uniques = []; 

for (let i = 0; i < param.length; i++) {
    if (!uniques.includes(param[i])) {
        uniques.push(param[i]);
    }
  }
  return uniques;
}

console.log(`asi queda el array con duplicados: `,duplicates)
console.log(`no asi queda el array sin duplicados`, removeDuplicates(duplicates)); */


const counterWords = [
    'code', 
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
]

function repeatCounter(param) {
    let count = {};
    for (let i = 0; i < param.length; i++) {
        if (param[i] in count) {
            count[param[i]]++
        } else {
            count[param[i]] = 1
        }
    }
    return count
}

console.log(repeatCounter(counterWords));
