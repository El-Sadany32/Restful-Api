const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    fristName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
});

module.exports=mongoose.model('Posts',postSchema);