const express = require('express');
const router = express.Router()
module.exports = router;
const LeaseModel = require('../models/Lease');

// Create Lease
router.post('/post', async (req, res) => {
    try{
        const newLease = new LeaseModel({
            ...req.body
        })
        const dataSaved = await newLease.save();
        res.status(200).json(dataSaved)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Get all Lease
router.get('/all', async (req, res) => {
    try{
        const LeaseData = await LeaseModel.find({});
        res.json(LeaseData)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Update Lease by ID
router.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const updateLease = await LeaseModel.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(updateLease)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Delete Lease by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const LeaseData = await LeaseModel.findByIdAndDelete(id)
        res.send(`${LeaseData._id} has been deleted`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
