const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name: {

        type: String,
        required: true
    },

    description: {
        type: String,
        required: true

    },

    brand: {
        type: String,
        default: ''

    },

    images: [{
        type: String,
        required: true

    }],
    price: {
        type: Number,
        default: 0
    },
    oldPrice: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    countInStock: {
        type: Number,
        required: true,

    },
    rating: {
        type: Number,
        default: 0
    },
  
    isFeatured: {
        type: Boolean,
        required: false,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },

})
exports.Product = mongoose.model('Product', productSchema);