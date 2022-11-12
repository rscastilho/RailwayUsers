

exports.login = async (req, res) =>{
    try {
        res.json({'message':'login'})
    } catch (error) {
        return error
    }
}