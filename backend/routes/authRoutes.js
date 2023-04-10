const express=require('express')
const router=express.Router();
const {
    signup,
    login,
    logout
} = require('../controllers/authController')

const requireAuth =require('../middleware/requireAuth')

//signup post request to create a new user in db
router.post('/signup',signup)

//login post request to authenticate a current user
router.post('/login',login)

//get request for user profile after authentication
router.use('/profile',requireAuth)
router.get('/profile',(req,res)=>{
    res.status(200).json({msg:'authorised'})
})




module.exports=router