const mongoose = require('mongoose');

const BookTrip = mongoose.model('BookTrip',{
    Destination : {
        type : String,
        required : true
    },
    CheckInDate : {
        type : String,
        required : true
    },
    CheckOutDate : {
        type : String,
        required : true
    },
    Adult : {
        type : String,
        required : true
    },
    Children : {
        type : String,
        required : true
    },
    HotelsNearby : {
        type : String,
        required : true
    },
    CabFeePerDay : {
        type : String,
        required : true
    }
})

module.exports = BookTrip;