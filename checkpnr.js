var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/smspnr", {useNewUrlParser: true });

var User = require('./models/Users');

User.find({},(err,data)=>{
    data.forEach((pnrData)=>{
        console.log(pnrData.pnr);
    })
})