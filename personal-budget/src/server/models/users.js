const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username :{
        type: String,
        required : true,
        trim: true,
        unique: true
    },
    password :{
        type : String,
        required : true,
    }
},
{collection : 'users'})

const userModel = mongoose.model('final',userSchema);

function getUserDocument(req, res, next) {
  userModel.findOne({username: req.user.username}, (err, user) => {
     if (err || !user) {
         res.status('400').json({status: 'user-missing'});
     }
     req.userDocument = user;
     next();
});
}
module.exports = { UserSchema, userModel, getUserDocument };
