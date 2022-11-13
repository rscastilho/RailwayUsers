const {body} = require('express-validator')

const loginValidator = ()=>{
    return [
        body('email')
        .isString().withMessage('Informe seu email para login')
        .isEmail().withMessage('Informe um email válido'),
        body('password')
        .isString().withMessage('Informe sua senha')
    ]
}

module.exports =  {loginValidator}