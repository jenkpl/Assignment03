
//declaring a variable called coinFlip.
let coinFlip;
let times = parseFloat(prompt('Enter a number from 1-100'));
//for loop
for (let f = times; f <= 100; f++) {
    coinFlip = Math.round(Math.random());

//check result
    console.log(coinFlip);
    if (coinFlip === 0) {
        console.log("Heads");
    } else if (coinFlip === 1){
        console.log("Tails");
    }
}
