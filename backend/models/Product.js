const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    images: {
        type: [String], // Array of image URLs
        default: []
    },
    category: {
        type: String, // e.g., 'product', 'prepared-dish'
        required: true
    },
    oldPrice: { // For promotional items
        type: Number,
        min: 0,
        default: null
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields

const Product = mongoose.model('Product', productSchema);

module.exports = Product;