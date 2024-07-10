const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, 'you have to register email']
    },
    contact: {
        type: Number
    },
    message: {
        type: String,
        required: [true, 'you have to type some message']
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;