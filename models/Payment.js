const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    leaseId: {
        required: true,
        type: String
    },
    customerId: {
        required: true,
        type: String
    },
    payment: {
        required: true,
        type: Number
    }
})

dataSchema.set('timestamps', true);

module.exports = mongoose.model('Payment', dataSchema)