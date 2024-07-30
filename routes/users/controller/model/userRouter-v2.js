const express = require('express')
const router = express.Router()

const {
    getAllUsers,
    createUser,
    updateUserById,
    deleteUserById
 } = require('./controller/userController')
const { updateUserByID, deleteUserByID } = require('./userController-v2')


router.get('/get-all-users', async (req, res)=>{
    try {
        const foundUsers = await getAllUsers()
        res.json({message: 'Users found.', payload:foundUsers})
    } catch (error) {
        res.status(500).json({message: 'Error', error:error })
    }
}),
router.post('/create-users', async (req, res)=>{
    try {
        const newUser = await createUsers(body)
        res.json({message: 'Users found.', payload:newUser})
    } catch (error) {
        res.status(500).json({message: 'Error', error:error })
    }
}),
router.put('/find-and-update/:id', async (req, res)=>{
    try {
        const updateUser = await updateUserById ( req.params.id,req.body)
        res.json({message: 'User updated.', payload:updateUser})
    } catch (error) {
        res.status(500).json({message: 'Error', error:error })
    }
}),

router.delete('/delete-user/:id',async (req, res)=>{
    try {
        await deleteUserById (req.params.id)
        res.json({message: 'User deleted.', payload: deleteUserById})
    } catch (error) {
        res.status(500).json({message: 'Error', error:error })
    }
   
})
module.exports={
    getAllUsers,
    createUser,
    updateUserByID,
    deleteUserByID
}