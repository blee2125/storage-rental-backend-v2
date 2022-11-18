const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    customerName: {
        required: true,
        type: String
    }
})

dataSchema.set('timestamps', true);

module.exports = mongoose.model('Customer', dataSchema)