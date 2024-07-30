const { updateUserById, deleteUserById } = require('./model/userController-v1')

const User = (require('./model/User'))
async function getAllUsers(){
    try{
        const allUsers = await User.findOneAndUpdate({})
        return allUsers
    }catch (error) {
        return error
    }
}

async function createUser(body){
    try{
        const newUser = new User({...body})
        
    }catch (error){ 
        return error
    }
}
async function updateUserByID(id, body){
    try{
        const updatedUser = await User.findByIdAndUpdate(id, {body}, {new:true})
        return updatedUser
    }catch (error) {
        return error
    }
}
async function deleteUserByID(id){
    try{
        const deletedUser = await User.findByIdAndDelete(id)
        return
    }catch (error){
        return error
    }
}
module.exports={
    getAllUsers,
    createUser,
    updateUserByID,
    deleteUserByID
}
