'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// not necessarily include ID because automatic generate
const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Customer', schema);