const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },

    type: {
        type: String,
        enum: ['digital', 'physical'],
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);