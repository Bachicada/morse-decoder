const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    expr=expr.replace(/(.{10})/g,"$1 ");
    let arr=[];
    arr =expr.split(' ')
    let copyArr=[];
    for (let j = 0; j < arr.length; j++) {
      copyArr.push(arr[j].replace(/^0+(?!\.)/,""))
    }
    
    let arrDots=[];
    for (let j = 0; j < copyArr.length; j++) {
      arrDots.push(copyArr[j].replace(/10/g,"."))
    }
    let arrDashes=[];
    for (let j = 0; j < arrDots.length; j++) {
      arrDashes.push(arrDots[j].replace(/11/g,"-"))
    }
  
    let arrLetters=[];
    arrLetters = arrDashes.map(function(char) {
    return MORSE_TABLE[char];})

   let arrSpace=[];
   // for (let j = 0; j < arrDots.length; j++) {
     arrSpace = arrLetters.map(function(item){return item == undefined? '+' : item;});
    
    return arrSpace.join('').replace(/\+/g,' ').trimEnd();
    }

module.exports = {
    decode
}