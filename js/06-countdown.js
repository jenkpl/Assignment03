//Write an application that counts down to 0 based on the number that a user passes into a prompt. If the number is 10, it should count down from 10 to 0. If the number is 100, it should count down from 100 to 0 and so on.  
for (let z = prompt("Enter a number"); z>=0 ; z--) {
    document.write(` ${z}<br>`);
}