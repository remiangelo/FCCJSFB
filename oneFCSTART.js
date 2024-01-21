/* 
1. ask the user what they want to eat
2. respond with what they would like
3. ok this will be xyz $
4. would you like to pay cash or card
5. if they pick cash add 5% to the tip
6. if they pick card add 10% to the tip
*/ 


const prompt = require('prompt-sync')();

// 1. Ask the user what they would like to eat
const question = prompt("What would you like to eat? ");

// 2. Confirm the user's choice
console.log(`You would like to eat: ${question} right?`);
let confirmation = prompt("Please type 'yes' to confirm or 'no' to pick something else: ");

if (confirmation.toLowerCase() !== 'yes') {
    console.log("Please pick something else!");
    return;
}

// 3. Inform the user about the price
console.log("Ok, this will be $15");
let priceAcknowledgement = prompt("Please type 'ok' to acknowledge the price: ");

if (priceAcknowledgement.toLowerCase() !== 'ok') {
    console.log("Please acknowledge the price before proceeding!");
    return;
}

// 4. Ask the user for their preferred payment method
let price = 15;
let response = prompt("Would you like to pay with cash or card? ");

if(response.toLowerCase() === "cash") {
    price += price * 0.05; // adds 5% tip
    console.log(`Ok, your total is $${price.toFixed(2)}`);
} else {
    price += price * 0.10; // adds 10% tip
    console.log(`Your total is $${price.toFixed(2)}`);
}