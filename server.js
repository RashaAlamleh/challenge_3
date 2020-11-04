
const express = require('express');

const app = express();

//ROUTS 
app.get("/" , (request , response) => {
    response.send('We are at home');
});

//listen to the server.
app.listen(27017);
