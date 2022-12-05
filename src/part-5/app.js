// configure environment - DO NOT MODIFY
require('dotenv').config();

// Import package
const jwt = require('jsonwebtoken');

const payload = jwt.verify(token, secret);

// Define variables - DO NOT MODIFY
let token;
let payload;


// 1. Sign (create) a JWT containing your email address
let token = jwt.sign( 
    { email: "erik.rasanen@metropolia.fi" }, // payload object
    process.env.SECRET_KEY,        // secret token from .env file
    { expiresIn: '1h' }            // options (example: Token expires in 1 hour)
);


// Your code here

// See the JWT in the console
console.log('JWT:', token);

// 2. Decode a JWT Payload

// Your code here
const payload = jwt.decode(token);

// See the decoded payload in the console
console.log('Payload:', payload);

// 3. Verify a JWT

// Your code here

// See the verified payload in the console
console.log('Verified Payload:', payload);

