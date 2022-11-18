const express = require('express');
const router = express.Router()
module.exports = router;
const StorageUnitModel = require('../models/StorageUnit');

// Create Storage Unit
router.post('/post', async (req, res) => {
    try{
        const newStorageUnit = new StorageUnitModel({
            ...req.body
        })
        const dataSaved = await newStorageUnit.save();
        res.status(200).json(dataSaved)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Get Storage Unit by ID
router.get('/get/:id', async (req, res) => {
    try{
        const StorageUnitData = await StorageUnitModel.findById(req.params.id);
        res.json(StorageUnitData)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Get all Storage Units
router.get('/all', async (req, res) => {
    try{
        const StorageUnitData = await StorageUnitModel.find({});
        res.json(StorageUnitData)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Update Storage Unit by ID
router.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const updatedStorageUnit = await StorageUnitModel.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(updatedStorageUnit)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Delete Storage Unit by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const StorageUnitData = await StorageUnitModel.findByIdAndDelete(id)
        res.send(`${StorageUnitData._id} has been deleted`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Delete ALL Storage Units
router.delete('/deleteall', async (req, res) => {
    try {
        const StorageUnitData = await StorageUnitModel.deleteMany({})
        res.send(`ALL STORAGE UNITS DELETED - Total: ${StorageUnitData.deletedCount}`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})