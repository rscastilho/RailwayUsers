const express = require('express')
const router = express.Router()

router.use('/api/users', require('../controllers/users/usersController'))


module.exports = router