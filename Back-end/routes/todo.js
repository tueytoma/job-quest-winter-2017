const express = require('express')
const {Todo} = require('../models/todo.model')

var router = express.Router()

// GET / Get all todos
router.get('/',(req,res)=>{
    Todo.find({}).sort({end_date : 1}).exec((err,results) => {
        if(results)
            res.json({todo_list : results})
        else
            res.json('No items')
    })
})

router.get('/todo', (req, res)=>{
    let name = req.query.name
    let status = req.query.status

    let query = {}

    if(!name) {
        query['$or'] = [
            {
                status: {
                    $regex: status,
                    $options: 'i'
                }
            }
        ]
    }
    else if(!status) {
        query['$or'] = [
            {
                name: {
                    $regex: name,
                    $options: 'i'
                },
            },
            {
                description: {
                    $regex: name,
                    $options: 'i'
                },
            }
        ]
    }
    else {
        query['$or'] = [
            {
                status: {
                    $regex: status,
                    $options: 'i'
                },
                name: {
                    $regex: name,
                    $options: 'i'
                }
            },
            {
                status: {
                    $regex: status,
                    $options: 'i'
                },
                description: {
                    $regex: name,
                    $options: 'i'
                }
            }
        ]
    }

    Todo.find(query).sort({end_date : 1}).exec((err,results)=>{
        if(results) 
            res.json({todo_list : results})
        else
            res.json('No Users')
    })
})

// POST / Create new todo
router.post('/', (req, res) => {
    let newItem = new Todo()
    newItem.name = req.body.name
    newItem.description = req.body.description
    newItem.end_date = req.body.end_date
    newItem.status = req.body.status
    newItem.save()
    res.send(newItem)
})

// DELETE /:id Delete specific todo item
router.delete('/:id', (req,res) => {
    Todo.findOne({
        _id: req.params.id
    }).exec((err,results) => {
        if(results) {
            results.remove();
            res.send({
                message: 'Success'
            })
        } else {
            res.json('No items')
        }
    })
})

// POST /:id/toggle Toggle the state of specific todo item (Todo / Done)
router.post('/:id/toggle', (req,res) => {
    Todo.findOne({_id: req.params.id}).exec((err,results) => {
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