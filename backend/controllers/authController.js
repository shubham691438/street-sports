const mongoose=require('mongoose')
const User=require('../models/UserModel')
const jwt = require('jsonwebtoken')
require('dotenv').config()


//creating json web token
const maxAge=2*24*60*60
const createToken =(id)=>{
    return jwt.sign({id},process.env.SECRET_JWT_KEY,{expiresIn:maxAge})
}



//signup post request to create a new user in db
const signup = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.signup(email, password)

    // create a token
    const token = createToken(user._id)
    

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// login post request 
const login = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

//logout get  request to log a user out
const logout =(req,res)=>{
    res.cookie('jwt','',{maxAge:1,HttpOnly:true})
    res.status(200).json({msg:"logged out successfully"})
}

module.exports={
    signup,
    login,
    logout
}