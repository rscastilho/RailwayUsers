const express = require('express')
const router = express.Router()

router.use('/api/users', require('../controllers/users/usersController'))
router.use('/api/login', require('../controllers/login/loginController'))


module.exports = router