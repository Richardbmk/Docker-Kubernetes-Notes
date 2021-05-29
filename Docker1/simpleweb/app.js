const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('how are you doing Cloud Engineer? THIS IS A NEW CHANGE!');
});

app.listen(5000, () => {
    console.log("App is listinig on Port 5000");
})