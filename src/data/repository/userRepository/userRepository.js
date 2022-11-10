const { queryGetAll, queryAddUser, queryGetUserById, queryGetUserBycpf, queryCountUsers } = require('../../queries/usersQueries/usersQueries')

exports.getAll = async (itensPerPage, page) => {
    try {
        return queryGetAll(itensPerPage, page)
    } catch (error) {
        return error
    }
}

exports.getUserByid = async (id) => {
    try {
        return queryGetUserById(id)
    } catch (error) {
        return error
    }
}
exports.getUserByCpf = async (cpf) => {
    try {
        return queryGetUserBycpf(cpf)
    } catch (error) {
        return error
    }
}

exports.getCountUsers = async () => {
    try {
        return queryCountUsers()
    } catch (error) {
        return error
    }
}

exports.postUser = async (name, lastName, email, password, cpf, createAt) => {
    try {
        return queryAddUser(name, lastName, email, password, cpf, createAt)
    } catch (error) {
        return error
    }
}