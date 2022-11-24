const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    unitId: {
        required: true,
        type: String
    },
    customerId: {
        required: true,
        type: String
    },
    rate: {
        required: true,
        type: Number
    },
    totalCost: {
        required: true,
        type: Number
    },
    payments: {
        required: false,
        type: Number
    },
    startDate: {
        required: true,
        type: String
    },
    endDate: {
        required: true,
        type: String
    }
})

dataSchema.set('timestamps', true);

module.exports = mongoose.model('Lease', dataSchema)