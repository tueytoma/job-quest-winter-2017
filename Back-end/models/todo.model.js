const mongoose = require('mongoose')
const Schema = mongoose.Schema
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

let todoSchema = new Schema({
    id : {
        unique : true,
        type : String,
        required: 'Please fill in a ID'
    },
    first_name : {
        type : String,
        required: 'Please fill in a firstname'
    },
    last_name : {
        type : String,
        required: 'Please fill in a lastname'
    },
    start_date : {
		type : Date
    },
    end_date : {
		type : Date
    },
    status : {
        type : String,
        required: 'Please fill in a status'
    }
})

todoSchema.plugin(autoIncrement.plugin, {
    model : 'Todo',
    startAt : 100
})

let Todo = mongoose.model('Todo', todoSchema)

module.exports = { Todo: Todo }