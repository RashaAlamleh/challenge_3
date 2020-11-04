
const express = require('express');

const app = express();

//app.use(express.static('public')

//ROUTS 
app.get("/" , (request , response) => {
    response.send('We are at home');
});

//listen to the server.
app.listen(3000);
