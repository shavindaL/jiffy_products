const mongoose = require('mongoose')
const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
});

const CustomerModel = mongoose.model("customers", CustomerSchema)

module.exports = CustomerModel