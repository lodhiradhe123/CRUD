const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    contact:Number,

})
 module.exports=mongoose.model("test",userSchema);