const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    unitNumber: {
        required: true,
        type: String
    },
    type: {
        required: false,
        type: String
    },
    size: {
        required: false,
        type: String
    },
    location: {
        required: false,
        type: String
    },
    standardRate: {
        required: false,
        type: Number
    },
    available: {
        required: false,
        type: Boolean
    }
})

dataSchema.set('timestamps', true);

module.exports = mongoose.model('StorageUnit', dataSchema)