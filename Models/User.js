const mongoose = require('mongoose');

const User = mongoose.model('User',{
    Fullname : {
        type : String,
        required : true
    },
    Address : {
        type : String,
        required : true
    },
    PhoneNumber : {
        type : String,
        required : true
    },
    Username : {
        type : String,
        required : true,
        unique: true
    },
    Password : {
        type : String,
        required : true
    }
})

module.exports = User;