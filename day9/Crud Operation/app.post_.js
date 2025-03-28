// app.post()

// Purpose: Used to handle POST requests (used to send data to the server).

// Application: Creating a new user, adding data to a database.


const express = require('express');

const app = express();

app.post('/user',(req,res)=>{

    const newUser = req.body;
    res.status(201).json({message: 'user created successfully', user: newUser});

});

app.listen(3000,()=>{
    console.log("p port is listening on 3000");
});



