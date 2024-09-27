const express = require('express');
const router = express.Router();
const User = require('../models/userModel')

// Create
router.post('/', async(req,res) => {
    const { name, email} = req.body;
    
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