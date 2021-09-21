"use strict";


// 1. isHometown
function isHometown(town) {
// Given a `town`, return `True` if `town` is 'San Francisco'.

// Arguments:
//     town (str): A town

// Returns:
//     bool: True if `town` is 'San Francisco'
// """

// return town == 'San Francisco'
return town === 'San Francisco';

}

// console.log(isHometown('San Francisco'))
// console.log(isHometown('Oakland'))


// 2. getFullName
// Given `first_name` and `last_name`, return a full name.

// Arguments:
//     first_name (str): A first name
//     last_name (str): A last name

// Returns:
//     str: A full name
// """

// return f'{first_name} {last_name}'

// Define your function here

function getFullName(firstName, lastName) {

    const fullName = [];

    fullName.push(firstName, lastName);

    return fullName.join(' ');
}

console.log(getFullName('Spongebob', 'Squarepants'))

// Return the total price of an item, figuring in state taxes and fees.

// Arguments:
//     base_price (float): Base price of an item
//     state (str): Two-letter abbreviation of a U.S. state
//     tax (float): Tax rate. Defaults to 0.05

// Returns:
//     float: The total price of an item
   

// 3. calculateTotal
function calculateTotal(basePrice, state, tax = 0.05) {
    
    let subTotal = basePrice * (1 + tax);
    let fee = 0; 

    if (state === 'CA') {
        fee = 0.03 * subTotal;
    }
    else if (state === 'PA') {
        fee = 2; 
    }
    else if (state === 'MA') {
        if (basePrice <= 100) {
            fee = 1;
        }
        else {
            fee = 3;
        }
    }

    // Use .toFixed(n) to format the decimal values.
    // (subTotal + fee).toFixed(2)
    return subTotal + fee;
}

console.log(calculateTotal(10, 'CA'))