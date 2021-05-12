// Code your solutions in this file
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

function writeCards(arrayOfNames, eventName) {
    const newArr = [];
    for(let count=0; count<arrayOfNames.length; count++) {
        newArr[count]=`Thank you, ${arrayOfNames[count]}, for the wonderful ${eventName} gift!`;
    }
    return newArr;
}