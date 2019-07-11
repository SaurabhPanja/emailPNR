var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/smspnr", {useNewUrlParser: true });

var userSchema = mongoose.Schema({
    email : String,
    pnr : String,
    confirmed : {
        type : Boolean,
        default : false
    }
});

var User = new mongoose.model('User',userSchema);

User.find({},(err,data)=>{
    data.forEach((pnrData)=>{
        console.log(pnrData.pnr);
    })
})