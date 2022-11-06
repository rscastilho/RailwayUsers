const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json('roteamento funcionando')
})

module.exports = router