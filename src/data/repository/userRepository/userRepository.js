const { queryGetAll } = require('../../queries/usersQueries/usersQueries')

exports.getAll = async () => {
    try {
        return queryGetAll()
    } catch (error) {
        return error
    }
}