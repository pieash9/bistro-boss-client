/**
 * 
 * 1. Install stripe and react.js
 * 2.Create a checkout from with card elements (card elements contains : card number, card expiration date, cvs, zip code)
 * 3.Create account on stripe and get the publishable key (PK)
 * 4. get card information
 * 5.create a payment method
 * 6. use a test card
 *  --------------- server ----------------
 * 7. On the server side install stripe: npm install --save stripe
 * 8. create a payment intent api with payment method types: ["card"]
 * 9. make sure you provide amount in cents (multiply amount with 100)
 * 10. call payment intent api to get client secret and store it in state 
 * 11. use ConfirmCardPayment api with client secret card info
 * 12.  display confirm card error and success
 * ---------------------------
 * 13.Do things after payment =>
 * 14. 
*/