const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: String,

    status: String,

    type: String,

    image: String

});

module.exports = mongoose.model(
    'service',
    serviceSchema
);