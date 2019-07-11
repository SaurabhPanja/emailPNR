//email pnr
//Saurabh Panja sagar parikh
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      User = require('./models/Users');

mongoose.connect("mongodb://localhost/smspnr", {useNewUrlParser: true });

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
