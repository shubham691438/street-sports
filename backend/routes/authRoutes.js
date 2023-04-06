const express=require('express')
const router=express.Router();
const {
    signup,
    login,
    logout
} = require('../controllers/authController')

//signup post request to create a new user in db
router.post('/signup',signup)

//login post request to authenticate a current user
router.post('/login',login)

//logout get get request to log a user out
router.get('/logout',logout)


module.exports=router