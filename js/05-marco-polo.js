for (let i = 1; i<101 ; i++) {
    let threes = (i / 3);  //For each iteration it will check if the current number is odd or even
    let fives = ( i / 5);
    if (Number.isInteger(threes)) {  // display a message in the console window. 
    console.log(`${i} is div by three.MARCO`);
    } else if (Number.isInteger(fives)) { 
    console.log(`${i} is div by fivePOLO.`);
    } else if 
    ((Number.isInteger(fives)) && (Number.isInteger(threes))) { 
        console.log(`${i} is div by BOTH.`);
} 
}