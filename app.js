const express = require ('express');
const path = require('path');

const app = express();



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'punctualityTest.html'));
});


const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting server", error);
        return;
    }
    console.log("Server is running on port: ", PORT);
});

module.exports = app;

