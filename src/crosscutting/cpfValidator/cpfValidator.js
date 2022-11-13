const { cpf } = require('cpf-cnpj-validator')

exports.validarCPF = (cpfNumber) => {
    try {
        const validar = cpf.isValid(cpfNumber)
        if (validar) {
            return true
        } else {
            return false
        }

    } catch (error) {
        return error
    }
}