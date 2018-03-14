const express = require('express');
// Dot env will take variables from .env and add the data onto process.env
require('dotenv').config();
const app = express();
const routes = require('./routes/');

console.log('Hello from Express');

// Middleware stack STARTS

// We can just say 'routes'.  Any request that will come in will use routes.
app.use('/api/v1/', routes);



// Middleware stack ENDS

//TODO: Add error handler



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`);
});