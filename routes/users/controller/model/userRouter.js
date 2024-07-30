const express = require('express')
const router = express.Router()

const {
    getAllUsers,
    createUser,
    updateUserById,
    deleteUserById
 } = require('./userController')
const { deleteUserByID, updateUserByID } = require('./userController-v2')


router.get('/get-all-users',getAllUsers)

router.post('/create-users', createUsers)
router.put('/find-and-update/:id', updateUserById)

router.delete('/delete-user/:id', deleteUserById)

module.exports={
    getAllUsers,
    createUser,
    updateUserByID,
    deleteUserByID}