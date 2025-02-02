const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  profile_img:{
    data: Buffer,
    contentType: String
},
  about_me:String,
  district:String,
  state:String,
  gender:String,
  dob:String,
  phone_no:Number,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  social_media:{
    facebook:String,
    instagram:String,
    twitter:String
  },
  current_tournament_id:[{
    type:Schema.Types.ObjectId,
    ref:'Tournament',
    required:false,
  }],
  previous_tournament_id:[{
    type:Schema.Types.ObjectId,
    ref:'Tournament',
    required:false
  }],

})

// static signup method
userSchema.statics.signup = async function(name,district,state,gender,dob,phone_no,email,password) {

  // validation
  if (!name) {
    throw Error('Name is required')
  }
  if(!email){
    throw Error('Email is required')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  // if (!validator.isStrongPassword(password)) {
  //   throw Error('Password not strong enough')
  // }
  if(password.length<6)
  {
    throw Error("minimum length of password should be 6")
  }
  if(phone_no)
  {
    if(phone_no.length<10)
    {
      throw Error("minimum length of password should be 10")
    }
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ name,district,state,gender,dob,phone_no,email, password: hash })

  return user
}

// static login method
userSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('email is not signed up')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

module.exports = mongoose.model('User', userSchema)