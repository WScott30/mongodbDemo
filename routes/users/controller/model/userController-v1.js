const User = require("../model/User") // pulls schema for DB use


module.exports = {
    //getAll
    getAllUsers: function(body, callback){
      //empty find everything with empty object
      User.find({})
      //promise use .then method
      .then(payload=>{
         callback(null, payload)
      })
      .catch (error =>{
         callback(error,null)
      })
    },
    //createUser
    createUser: function(body, callback){
        
           const{
            firstName,
            lastName,
            email,
            password,
            username
           } = body
        
        const savedUser = new User({
            
             firstName,
             lastName,
             email,
             password,
             username
           
         })
         savedUser.save()//Promise
         .then((payload)=>{
            callback(null,payload)
         })
         .catch(error=>{
            callback(error, null)
         })
    },
    //updateUserById
    updateUserById : function (id, body, callback){
      User.findByIdAndUpdate(id, body, {new: true})
      .then(updatedPayload =>{
         callback(null, updatedPayload)
      })
      .catch(error =>{
         callback(error, null)
      })
    },
    //deleteUserById
    deleteUserById : function(id, callback){
      User.findByIdAndDeleteById(id)
      .then(deletedUser =>{
         callback(null, deletedUser)
      })
      .catch(error =>{
         callback(error, null)
      })
    }
}