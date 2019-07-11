var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    email : String,
    pnr : String,
    confirmed : {
        type : Boolean,
        default : false
    }
});

module.exports = new mongoose.model('User',userSchema);