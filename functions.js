"use strict";


// 1. isHometown
// Given a `town`, return `True` if `town` is 'San Francisco'.

// Define your function here
const isHometown = (town) => town === 'San Francisco';


// 2. getFullName
// Given `first_name` and `last_name`, return a full name.
// Define your function here
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// 3. calculateTotal
// Return the total price of an item, figuring in state taxes and fees.
// Define your function here
const calculateTotal = (basePrice, state, tax) => {
    let subtotal = basePrice * (1 + tax);
    
    let fee = 0;

    if (state === 'CA') {
        fee = 0.03 * subtotal;
    } else if (state === 'PA') {
        fee = 2;
    } else if (state === 'MA') {
        if (basePrice <= 100) {
            fee = 1;
        } else {
            fee = 3;
        }
    }
    
    return subtotal + fee
}