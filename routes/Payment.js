const express = require('express');
const router = express.Router()
module.exports = router;
const PaymentModel = require('../models/Payment');
const LeaseModel = require('../models/Lease');

// Create Payment
router.post('/post', async (req, res) => {
    try{
        const newPayment = new PaymentModel({
            ...req.body
        })
        const dataSaved = await newPayment.save();

        const leaseData = await LeaseModel.findById(req.body.leaseId)
        if (leaseData.payments === undefined) {
            const updateLeaseBalance = await LeaseModel.findByIdAndUpdate(
                req.body.leaseId, {payments: req.body.payment}, { new: true }
            )
        } else {
            const updateLeaseBalance = await LeaseModel.findByIdAndUpdate(
                req.body.leaseId, {payments: (Number(leaseData.payments) + Number(req.body.payment))}
            )
        }
        
        res.status(200).json(dataSaved)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Get all Payment
router.get('/all', async (req, res) => {
    try{
        const PaymentData = await PaymentModel.find({});
        res.json(PaymentData)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Update Payment by ID - not setup with lease
router.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const updatePayment = await PaymentModel.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(updatePayment)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Delete Payment by ID - not setup with lease
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const PaymentData = await PaymentModel.findByIdAndDelete(id)
        res.send(`${PaymentData._id} has been deleted`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
