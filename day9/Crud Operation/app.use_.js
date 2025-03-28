// app.use()
// Purpose: Middleware function that executes for every request.

// Application: Logging requests, authentication, setting headers.


const express = require('express');

const app = ('express');

app.use((req, res, next) => {

    console.log('${req.method } request made to ${req.url}');

    next();



});

app.get('/', (req, res) => {

    res.send('hello World');

})

app.listen(3000, () => {

    console.log('app is listening on port 3000');

});
