const { body } = require('express-validator')

const userValidator = () => {
    return [
        body('name').isString().withMessage("Campo name é obrigatório"),
        body('lastName').isString().withMessage("Campo lastName é obrigatório"),
        body('email').isString().withMessage("Campo email é obrigatório").isEmail().withMessage("Informe um email válido"),
        body('cpf').isString().withMessage("Campo CPF é obrigatório"),
        body('password').isString().withMessage("Campo password é obrigatório"),
        body('confirmarPassword').isString().withMessage("Confirmação da senha é obrigatória")
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error("As senhas devem ser iguais")
                }
                return true
            })
    ]
}

const userUpdate = () => {
    return [
        body('name').optional(),
        body('lastName').optional(),
        body('email').optional().isEmail().withMessage("Informe um email válido")
    ]
}
module.exports = { userValidator, userUpdate }