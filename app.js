const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

// Middleware
app.use(bodyParser.json());

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});

// connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true, 
        useUnifiedTopology: true
    }, 
    () => { console.log('DB connected!'); }
);

app.listen(3000);