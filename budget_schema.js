const mongoose = require("mongoose")

const colorValidator = (x) => (/^#([0-9a-f]{6})$/i).test(x);

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        validator: [colorValidator, 'Invalid color'],
        required: true
    }
}, { collection: 'addEntry' })

module.exports = mongoose.model('mongo_nodejs', budgetSchema)