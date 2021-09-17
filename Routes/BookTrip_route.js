const express = require('express');
const router = express.Router();
const BookTrip = require('../Models/BookTrip');
const {check, validationResult} = require('express-validator');

//Booking a trip
router.post('/booktrip', function(req,res)
{
    const {Destination, CheckInDate, CheckOutDate,
        Adult, Children, HotelsNearby, CabFeePerDay} = req.body

    const data = new BookTrip({
        Destination : Destination,
        CheckInDate : CheckInDate,
        CheckOutDate : CheckOutDate,
        Adult : Adult,
        Children : Children,
        HotelsNearby : HotelsNearby,
        CabFeePerDay : CabFeePerDay
    })

    const booktrip_data = data.save()
    .then(function(result)
    {
        console.log(booktrip_data);
        res.status(201).json({
            message: "Your trip has been booked.", 
            success:true, 
            data:result
        });
    })
    .catch(function(e)
    {
        res.status(500).json({message: e})
    });
})

module.exports = router;