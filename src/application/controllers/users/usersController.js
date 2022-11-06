const { json } = require('body-parser')
const express = require('express')
const router = express.Router()
const sql = require('../../../data/db/db')

router.get('/', (req, res) => {
    sql.query('SELECT * FROM railway.users', (err, data)=>{
        err && console.log(`erro`, err)
        res.status(200).json({data})
    })

    
})

module.exports = router