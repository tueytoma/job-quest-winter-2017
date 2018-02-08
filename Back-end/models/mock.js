const mongoose = require('mongoose')

const {Todo} = require('./todo.model')

var description = 'data mockup'

var Entities = {

    Todo : [
        {
            _id : 0,
            name: 'Work 1',
            first_name: 'Sitthichai',
            last_name: 'Saejia',
            start_date: '2017-05-19T14:00:00+07:00',
            end_date: '2017-05-19T14:00:00+07:00',
            status: 'Todo'
        },
        {
            _id : 1,
            name: 'Work 2',
            first_name: 'Tae-yeon',
            last_name: 'Kim',
            start_date: '2017-05-19T14:00:00+07:00',
            end_date: '2017-05-19T14:00:00+07:00',
            status: 'Done'
        },
        {
            _id : 2,
            name: 'Work 3',
            first_name: 'Tuey',
            last_name: 'Toma',
            start_date: '2017-05-19T14:00:00+07:00',
            end_date: '2017-05-19T14:00:00+07:00',
            status: 'Todo'
        },
        {
            _id : 3,
            name: 'Work 4',
            first_name: 'Step',
            last_name: 'Boom',
            start_date: '2017-05-19T14:00:00+07:00',
            end_date: '2017-05-19T14:00:00+07:00',
            status: 'Done'
        },
        {
            _id : 4,
            name: 'Work 5',
            first_name: 'Benz',
            last_name: 'Naja',
            start_date: '2017-05-19T14:00:00+07:00',
            end_date: '2017-05-19T14:00:00+07:00',
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