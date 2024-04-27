// DEPENDENCIES : 
const express  = require('express');
const dotenv = require('dotenv');


//FILES & FOLDERS & ENVS:
const port = process.env.PORT | 3000; 



// MIDDLEWARES & OTHER FUNCTIONS : 
const app = express();



// API - END POINTS : 
app.get('/', (req, res) => {
    res.send('Welcome to club connect home page');
});



app.listen(port, () => {
    console.log("server listening on port " + port);
});