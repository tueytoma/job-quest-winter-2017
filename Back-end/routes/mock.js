const express = require('express')
const router = express.Router()
const {DB} = require('../models/mock')

router.get('/mock', (req,res)=>{
    DB.mockAll()
    res.send('Mocked Successful')
})

module.exports = router