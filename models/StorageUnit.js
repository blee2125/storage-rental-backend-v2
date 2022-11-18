const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    unitNumber: {
        required: true,
        type: String
    }
})

dataSchema.set('timestamps', true);

module.exports = mongoose.model('StorageUnit', dataSchema)