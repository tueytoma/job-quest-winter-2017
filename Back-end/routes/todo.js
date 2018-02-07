const express = require('express')
const {Todo} = require('../models/todo.model')

var router = express.Router()

// GET / Get all todos
router.get('/',(req,res)=>{
    Todo.find({}).exec((err,results) => {
        if(results)
            res.json({todo_list : results})
        else
            res.json('No items')
    })
})

// POST / Create new todo
router.post('/', (req, res) => {
    let newItem = new Todo()
    newItem.id = req.body.id
    newItem.first_name = req.body.first_name
    newItem.last_name = req.body.last_name
    newItem.start_date = req.body.start_date
    newItem.end_date = req.body.end_date
    newItem.status = req.body.status
    newItem.save()
    res.send(newItem)
})

// DELETE /:id Delete specific todo item
router.delete('/:id', (req,res) => {
    const todo = Todo.findOne({
        id: req.params.id
    })
    todo.remove();
    res.send({
        message: 'Success'
    })
})

// POST /:id/toggle Toggle the state of specific todo item (Todo / Done)
router.post('/:id/toggle', (req,res) => {
    Todo.findOne({id: req.params.id}).exec((err,results) => {
        if(results) {
            let value = ''
            if(results.status == 'Done') value = 'Todo'
            else value = 'Done'
            Todo.findByIdAndUpdate(results._id, {status: value}, (err, updated) => {
                if (updated) {
                    res.json({ success: true, review: results })
                } else {
                    res.json('Error Updating Trainer Rating ' + err)
                }
            })
        } else {
            res.json('No items')
        }
    })    
    
    
})

module.exports = router