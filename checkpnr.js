// var mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost/smspnr", {useNewUrlParser: true });

// var User = require('./models/Users');

// var PNR = [];

// var infiniteLoop = setInterval(()=>{
//     User.find({},(err,data)=>{
//         if(err)
//             throw err;
//         else{
//             data.forEach(pnrData => {
//                 console.log(pnrData.pnr);
//                 if(pnrData.pnr === "12345")
//                     clearInterval(infiniteLoop);
//             });
//         }
//     })
// },1000)
