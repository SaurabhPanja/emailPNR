//email pnr
//Saurabh Panja sagar parikh
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

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

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.render('index');
});

app.post('/',(req,res)=>{
    User.create({
        email : req.body.email,
        pnr : req.body.pnr
    },(err,data)=>{
        console.log(data);
    });
    // console.log(req.body.email,req.body.pnr);
    res.redirect('/');
});

app.listen(8080,()=>{
    console.log('Daud raha hai apun 8080 pe')
})
