var Request = require('superagent')
var config = require('./config')

let api = {}

api.err = err => {
    throw err.response
	/*if (err.response && err.response.body.error) throw err.response.body.error
	else throw err*/
}

api.getTodo = () =>{
    return Request.get(config.BACKURL)
        .then(res => {
            return res.body.todo_list[0].status
        })
}

module.exports = api