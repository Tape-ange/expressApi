// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const userController = require('./controllers/user.controller');
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/epressApi')
// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)

const ads = [
    {title: 'Hello, world (again)!'}
  ];

app.use(helmet());

app.use(express.json());

app.use(morgan('combined'));

app.get('/', (req, res) =>{
    res.send(ads);
});

userController(app);

app.use((err, res, req, next) => {
    console.log(err);
    next(err)
});

app.use((res, req, next) => {
    res.redirect('/')
});


app.listen(3002, () =>{
    console.log('listening on port 3002');
})