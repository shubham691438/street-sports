const mongoose=require('mongoose')
const {isEmail} =require('validator')
const bcrypt = require('bcrypt')

const Schema=mongoose.Schema;

const userSchema = new Schema({
    email:{
        type:String,
        required: [true,'Please enter an email'],
        unique:true,
        lowercase:true,
        validate:[isEmail,'Please enter a valid email']
    },
    password:{
        type:String,
        required:[true,'Please enter a password'],
        minLength:[6,,'minimum password length is 6 characters']
    }
},{timestamps:true});

// static method to login user
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error('incorrect password');
    }
    throw Error('email not registered');
  };

// create hashed password before it is saved to db
userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });

const User=mongoose.model('user',userSchema);

module.exports=User;