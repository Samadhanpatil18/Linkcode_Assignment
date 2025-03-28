// app.get()

// Purpose: Used to handle GET requests (used to retrieve data from the server).

// Application: Fetching data from a database, displaying a list of items.
const express = require('express');
const app = express();

app.get('/user', (req, res) => {
    const user = [  // Corrected variable name
        { id: 1, name: 'sam' },
        { id: 2, name: 'john' }
    ];

    res.json(user); // Sending the correct variable
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

