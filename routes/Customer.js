const express = require('express');
const router = express.Router()
module.exports = router;
const CustomerModel = require('../models/Customer');

// Create Customer
router.post('/post', async (req, res) => {
    try{
        const newCustomer = new CustomerModel({
            ...req.body
        })
        const dataSaved = await newCustomer.save();
        res.status(200).json(dataSaved)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Get Customer by ID
router.get('/get/:id', async (req, res) => {
    try{
        const CustomerData = await CustomerModel.findById(req.params.id);
        res.json(CustomerData)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Get all Customers
router.get('/all', async (req, res) => {
    try{
        const CustomerData = await CustomerModel.find({});
        res.json(CustomerData)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Update Customer by ID
router.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const updatedCustomer = await CustomerModel.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(updatedCustomer)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Delete Customer by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const CustomerData = await CustomerModel.findByIdAndDelete(id)
        res.send(`${CustomerData._id} has been deleted`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Delete ALL Customers
router.delete('/deleteall', async (req, res) => {
    try {
        const CustomerData = await CustomerModel.deleteMany({})
        res.send(`ALL CUSTOMERS DELETED - Total: ${CustomerData.deletedCount}`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})