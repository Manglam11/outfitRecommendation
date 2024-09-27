const express = require('express');
const router = express.Router();
const User = require('../models/userModel')

// Create
router.post('/', async(req,res) => {
    const { name, email} = req.body;
    const User = require('../models/userModel')
    try {
        const userAdded = await User.create({
            name : name,
            email: email
        });
        res.status(201).json(userAdded);
    }
    catch(error) {
        console.log(error);
        res.send(400).json({error:error.message});
    }
})

//Read
router.get('/', async(req,res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(error) {
        console.log(error);
        res.send(400).json({error:error.message});
    }
})


module.exports = router;