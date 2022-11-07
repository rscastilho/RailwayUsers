const { queryGetAll } = require('../../queries/usersQueries/usersQueries')

exports.getAll = async (itensPerPage, page) => {
    try {
        return queryGetAll(itensPerPage, page)
    } catch (error) {
        return error
    }
}