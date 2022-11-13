const { queryGetUserByEmail } = require('../../queries/loginQueries/loginQueries')

exports.getUserByEmail = async (email) => {
    return queryGetUserByEmail(email)

}