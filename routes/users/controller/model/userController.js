const User = require("../model/User") // pulls schema for DB use
const bcrypt =require('bcryptjs')

async function getAllUsers(req, res){
   try {
      const foundUsers =await User.find({})
      res.json({message:"Users found",payload: foundUsers})
   } catch (error) {
      res.status(500).json({message:"Error", error:error})
      // handling request now
   }
}
async function createUser(req, res){
   try {
     
        const hashedPassword =  await bcrypt.hash(req.body.password, 10)
      const newUser = newUser({
         ...req.body, password: hashedPassword
      })
      //needs the await because encryption takes a while 
      const savedUser = await newUser.save()
      res.json({message:"Users found", payload: savedUser})
   } catch (error) {
      res.status(500).json({message:"Error", error:error})
      // handling request now
   }
}
async function updateUserById(req, res){
   try {
      const updatedUser =await User.findByIdAndUpdate(req.param.id, req.body)
      
      res.json({message:"Users Updated", payload: updatedUser})
   } catch (error) {
      res.status(500).json({message:"Error", error:error})
      // handling request now
   }
}

async function deleteUserById(req, res){
   try {
      const deleteUser =await User.findByIdAndDelete(req.param.id)
      
      res.json({message:"User Deleted.", deleteUser})
   } catch (error) {
      res.status(500).json({message:"Error", error:error})
      // handling request now
   }
}

module.exports={
   getAllUsers,
   createUser,
   updateUserById,
   deleteUserById
}