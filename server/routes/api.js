const express=require('express');
const contact=require('../models/contact');


const router=express.Router();
const app=express();
const mongoose=require('mongoose');

const db="mongodb://localhost:27017";
mongoose.Promise=global.Promise;
mongoose.connect(db,{useNewUrlParser: true,useUnifiedTopology: true},(err)=>{
    if(err)
    console.log(err)
    else
    console.log("connection to mongo is successful");
})





router.get('/register',(req,res)=>{
   contact.find({}).exec((err,data)=>{
if(err)
console.log(err)
else
res.send(data);
   })

})



router.get('/register',(req,res)=>{
   let userData=req.body;
    contact.findOne({firstName:userData.firstName}),(err,data)=>{
 if(err)
 console.log(err)
 else{
     if(!data)
     console.log("user deleted")
     else
     res.status(200).send(data)
 }
}
 
 
 })




router.post('/register',(req,res)=>{
    let contactData=req.body;
let newContact=new contact(contactData);


newContact.save((err,insertedContact)=>{
    if(err)
    throw err;
    else

    res.status(200).send(insertedContact);
})
})

module.exports=router;