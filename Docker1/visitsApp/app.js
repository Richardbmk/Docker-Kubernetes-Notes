// Libraries requirements
const express = require('express');
const redis = require('redis');
const process = require('process');

// Make an instace of express App
const app = express();

// Setup a connection of the redis server
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
// Initializing visits
client.set('visits', 0);


app.get('/', (req, res) => {
    process.exit(0);
     client.get('visits', (err, visits) => {
         res.send('Number of visits is ' + visits);
         client.set('visits', parseInt(visits) + 1);
     });
});

app.listen(8081, () => {
    console.log("listen on port 8081");
});