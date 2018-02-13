var Request = require('superagent')
var config = require('./config')

let api = {}

api.err = err => {
    throw err.response
}

api.getTodo = () =>{
    return Request.get(config.BACKURL + '/')
        .then(res => {
            return res.body.todo_list
        })
}

api.getTodoBy = (name,status) => {
    return Request.get(config.BACKURL + '/todo')
        .query({name : name, status: status})
        .set('Accept', 'application/json')
        .then(res => {
            return res.body.todo_list
        })
}

api.createNote = data => {
	return Request.post(config.BACKURL + '/')
        .set('Accept', 'application/json')
        .send(data)
		.then(res => {
			return res.body
		},api.err)
}

api.toggleStatus = id => {
	return Request.post(config.BACKURL + '/' + id +' /toggle')
        .set('Accept', 'application/json')
        .send(id)
		.then(res => {
			return res.body
		},api.err)
}

api.removeItemById = id => {
    return Request.delete(config.BACKURL + '/' + id)
        .set('Accept', 'application/json')
        .then(res => {
            return res.body
        },api.err)
}

module.exports = api