const mongoose = require('mongoose')

const {Todo} = require('./todo.model')

var description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula justo, dictum faucibus ligula sit amet, tincidunt auctor ante. Ut feugiat lacus at risus lacinia imperdiet. Sed ultricies est eget.'

var Entities = {

    Todo : [
        {
            _id : 0,
            name: 'Work 1',
            description: 'Works ' + description,
            end_date: '2017-05-19T14:00:00+07:00',
            status: 'Todo'
        },
        {
            _id : 1,
            name: 'Work 2',
            description: description,
            end_date: '2017-05-20T14:00:00+07:00',
            status: 'Done'
        },
        {
            _id : 2,
            name: 'Work 3',
            description: description,
            end_date: '2017-05-21T14:00:00+07:00',
            status: 'Todo'
        },
        {
            _id : 3,
            name: 'Work 4',
            description: description,
            end_date: '2017-05-22T14:00:00+07:00',
            status: 'Done'
        },
        {
            _id : 4,
            name: 'Work 5',
            description: description,
            end_date: '2017-05-18T14:00:00+07:00',
            status: 'Todo'
        },
    ]
}

module.exports.DB = {
    mockAll : function(){     
        let count = 0
        let length = Object.keys(mongoose.connection.collections).length - 1
        for (var i in mongoose.connection.collections){
            if(mongoose.connection.collections[i].name != "identitycounters")
                mongoose.connection.collections[i].remove((err)=>{
                    ++count
                    if(count === length) {
                        let promises = []
                        for(let model in Entities){
                            promises.push(mongoose.model(model).create(Entities[model]))
                        }
                        Promise.all(promises)
                    }
                })
        }
    }
}