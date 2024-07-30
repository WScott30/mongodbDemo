const express = require('express')
const router = express.Router()

const userController = require('./controller/userController')

router.get('/get-all-users', (req, res)=>{
    userController.getAllUsers(req.body,(error, payload)=>{
        if(error){
            res.status(500).json({message: "Error", error:error})
        }else{
            res.json({message: 'Users found.', data:payload})
        }
    })
}),
router.post('/create-user', (req, res)=>{
    userController.createUser(req.body,(error, payload)=>{
        if(error){
            res.status(500).json({message: "Error", error:error})
        }else{
            res.json({message: 'User created.', data:payload})
        }
    })
}),
router.put('/find-and-update/:id', (req, res)=>{
userController.updateUserById(req.params.id, req.body,(error,payload)=>{
    if(error){
        res.status(500).json({message: "Error", error:error})
    }else{
        res.json({message: 'User Updated.', data:payload})
    }
})
}),
router.put('/delete-user/:id', (req, res)=>{
    userController.deleteUserById(req.params.id,(error, payload)=>{
        if(error){
            res.status(500).json({message: "Error", error:error})
        }else{
            res.json({message: 'User deleted.', data:payload})
        }
    })
})
module.exports= router