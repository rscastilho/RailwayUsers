const _userRepository = require('../../data/repository/userRepository/userRepository')
const sql = require('../../data/db/db')
const { hashPassword } = require('../../crosscutting/hashPassword/hashPassword')
const {validarCPF} = require('../../crosscutting/cpfValidator/cpfValidator')


exports.getAllUsers = async (req, res) => {
    try {
        const itensPerPage = parseInt(req.query.itensPerPage)
        const page = parseInt(req.query.page)
        const contarRegistros = await _userRepository.getCountUsers()
        let total = ''
        sql.query(contarRegistros.query, (err, data) => {
            err && res.json({ err })
            total = data[0].quantidade
        })

        const result = await _userRepository.getAll(itensPerPage, page)
        sql.query(result.query, result.fields, (err, data) => {
            err && res.json({ err })
            res.status(200).json({ 'totalRegistros': total, 'registros': data.length, data })
        })
    } catch (error) {
        return error
    }
}


exports.postAddUser = async (req, res) => {
    try {
        const { name, lastName, email, password, cpf } = req.body;
        const pegaUserByCPF = await _userRepository.getUserByCpf(cpf)
        const createAt = new Date();
        const passwordHash = await hashPassword(password)

        const validaCpf = validarCPF(cpf)
        if(!validaCpf){
            res.status(400).json({'message':'Digite um CPF válido!'})
            return
        }

        sql.query(pegaUserByCPF.query, pegaUserByCPF.fields, (err, data) => {
            err && res.status(404).json({ 'Erro encontrado': err })
            if (data.length > 0) {

                if (data[0].email.toLowerCase().trim() === email.toLowerCase().trim()) {
                    res.status(400).json({ 'message': "email já existe" })
                    return
                }
                 if (data[0].cpf === cpf) {
                     res.status(400).json({ "message": "CPF já cadastrado" })
                     return
                } 
            } else {
                _userRepository.postUser(name, lastName, email, passwordHash, cpf, createAt).then((result) => {
                    sql.query(result.query, result.fields, (err, data) => {
                        err && res.status(404).json({ 'Erro encontrado': err })
                        _userRepository.getUserByid(data.insertId).then((result) => {
                            sql.query(result.query, result.fields, (err, data) => {
                                err && res.status(404).json({ 'Erro encontrado': err })
                                res.status(200).json({ 'message': 'Usuário cadastrado com sucesso!', data })
                            })
                        })
                    })
                })
            }
        })
    } catch (error) {
        res.status(400).json({ "message": error })
        return error
    }
}

exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id
        let { name, lastName, email } = req.body;
        const pegarUser = await _userRepository.getUserByid(id);
        sql.query(pegarUser.query, pegarUser.fields, (err, data) => {
            err && res.status(400).json({ 'message': 'erro ao buscar id', err })
            if (!data.length) {
                res.status(404).json({ 'message': `Usuário id ${id} não encontrado` })
                return
            } else {
                name ? name : name = data[0].name
                lastName ? lastName : lastName = data[0].lastName
                email ? email : email = data[0].email
                _userRepository.putUser(name, lastName, email, id).then((result) => {
                    sql.query(result.query, result.fields, (err, data) => {
                        err && res.status(400).json({ 'message': 'erro ao atualizar usuário', err })
                        res.status(200).json({ 'message': `Usuário ${name.toUpperCase()} atualizado com sucesso!` })
                        return
                    })
                })
            }
        })
    } catch (error) {
        return error
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const pegarUserId = await _userRepository.getUserByid(id)
        sql.query(pegarUserId.query, pegarUserId.fields, (err, data) => {
            err && res.status(400).json({ 'message': 'erro ao buscar id', err })
            if (!data.length) {
                res.status(404).json({ 'message': `Usuário id ${id} não encontrado` })
                return
            } else {
                _userRepository.deleteUser(id).then((result) => {
                    sql.query(result.query, result.fields, (err, data) => {
                        err && res.status(400).json({ 'message': 'erro ao tentar deletar usuario', err })
                        res.status(200).json({ 'message': 'Usuário deletado com sucesso!' })
                        return
                    })
                })
            }
        })
    } catch (error) {
        return error
    }
}

