const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const contactSchema=new Schema({
    contactId:Number,
    firstName:String,
    lastName:String,
    email:String,
    phone:Number,
    status:Boolean

});
module.exports=mongoose.model('contact',contactSchema,'contactList');