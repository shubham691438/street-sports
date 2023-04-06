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

// handle errors
const handleErrors = (err) => {
    let errors = { email: '', password: '' };

    // email not registered
    if (err.message === 'email not registered') {
        errors.email = 'email is not registered';
    }

    // incorrect password
    if (err.message === 'incorrect password') {
        errors.password = 'password is incorrect';
    }
  
    // duplicate email error
    if (err.code === 11000) {
      errors.email = 'Email is already registered';
      return errors;
    }
  
    // validation errors
    if (err.message.includes('user validation failed')) {
      
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
  }


const signup=async(req,res)=>{
    try{
        const user= new User({
            email:req.body.email,
            password:req.body.password
        })

        await user.save()
        const token=createToken(user._id);
        res.cookie('jwt',token,{ httpOnly : true, maxAge:maxAge*1000})
        res.status(200).json({user:user._id})
    }
    catch (err){
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}



//login post request to authenticate a current user
const login=async(req,res)=>{
    const { email, password } = req.body;

    try {
      const user = await User.login(email, password);

      const token = createToken(user._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json({ user: user._id });
    } 
    catch (err) {
      const errors = handleErrors(err);
      res.status(400).json({ errors });
    }
}

//logout get get request to log a user out
const logout =(req,res)=>{
    res.cookie('jwt','',{maxAge:1,HttpOnly:true})
    res.status(200).json({msg:"logged out successfully"})
}

module.exports={
    signup,
    login,
    logout
}