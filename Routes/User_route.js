const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const {check, validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


//Sign Up Process
router.post('/signup',[
    check('Fullname',"Fullname required").not().isEmpty(),
    check('Username',"Username required").not().isEmpty(),
    check('Password',"Password required").not().isEmpty()
], function(req,res)
{
    const errors = validationResult(req);

    if(errors.isEmpty())
    {
        const Fullname = req.body.Fullname
        const Address = req.body.Address
        const PhoneNumber = req.body.PhoneNumber
        const Username = req.body.Username
        const Password = req.body.Password

        bcryptjs.hash(Password, 10, function(err, hash)
        {
            const data = new User({
                Fullname : Fullname, 
                Address : Address, 
                PhoneNumber : PhoneNumber, 
                Username : Username, 
                Password : hash
            });
            const user_data = data.save()
            .then(function(result)
            {
                console.log(user_data)
                res.status(201).json({
                    message: "User Registered !!", 
                    success:true, 
                    data:result});
            })
            .catch(function(e)
            {
                res.status(500).json({message: e})
            });
        })
    }
    else
    {
        res.status(400).json(errors.array());
    }
})

//Login Process
router.post('/login',function(req,res)
{
    User.findOne({Username:req.body.Username})
    .then(function(result)
    {
        if(result === null)
        {
            return res.status(401).json({
                message: "Unauthorised User !!!"
            })
        }
        bcryptjs.compare(req.body.Password, result.Password,function(err,cresult)
        {
            if(cresult == false)
            {
                return res.status(401).json({message: "Username or Password Incorrect."})
            }
            const token = jwt.sign({UserID : result._id}, 'secretkey')

            res.status(200).json({
                message: "Login Success", 
                token:token, 
                success:true})
        })
    })
    .catch(function(e)
    {
        res.status(500).json({
            message:e
        })
    })
})

module.exports = router;