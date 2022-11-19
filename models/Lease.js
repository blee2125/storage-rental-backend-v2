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
    leaseLength: {
        required: true,
        type: Number
    }
})

dataSchema.set('timestamps', true);

module.exports = mongoose.model('Lease', dataSchema)