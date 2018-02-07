//Declare Node Module Dependencies
const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')

//Declare Sub Module Dependencies
const mock = require('./routes/mock')
const todo = require('./routes/todo')

mongoose.connect('mongodb://localhost/todo_api', {
    useMongoClient: true,
})

var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(mock)
app.use(todo)

// app.get('/', (req, res) => {
//     res.status(200).json('Welcome to StdC API')
// });

app.listen(4000,()=>{
    console.log('Server is running on port 4000')
})