const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    name: String,
    lastName: String,
    age: Number,
    birthDate: Date
});

module.exports = mongoose.model('Client', ClientSchema);
